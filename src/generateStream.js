import browserify      from 'browserify'
import watchify        from 'watchify'
import log             from './log'
import parseTransforms from './parseTransforms'
import source          from 'vinyl-source-stream'
import through         from 'through2'
import path            from 'path'
import {dest}          from 'gulp'

/**
 * Generate the Browserify stream
 *
 * @param  {String} entry
 * @param  {Object} opts  [Configuration options]
 * @return {Object}       [Browserify stream]
 */
export default function (entry, opts = {}) {
  const b = browserify({
    cache       : {},
    packageCache: {},
    fullPaths   : true
  })

  b.add(entry)

  if (opts.watch) {
    b.plugin(watchify)
    b.on('update', function () {
      return generateBundle(b, entry)
    })
    b.on('time', function (time) {
      return log(`${entry} ${parseTime(time)}`)
    })
  }

  if (opts.transforms) {
    parseTransforms(b, opts.transforms)
  }

  return generateBundle(b, entry)
}

/**
 * Parse time
 * @param  {Number} time [milliseconds]
 * @return {String}
 */
function parseTime(time) {
  if (time < 1000) {
    time = `${time}ms`.green
  } else if (time < 5000) {
    time = `${time}ms`.yellow
  } else {
    time = `${time}ms`.red
  }

  return time
}

/**
 * Finalize the bundle generation, used for both
 * browserify and watchify.
 * For now the basePath is the first folder of
 * the entry.
 * For now the dest folder is the dist folder.
 *
 * @param  {Object} b     [Browserify instance]
 * @param  {String} entry
 * @return {Object}       [Browserify stream]
 */
function generateBundle(b, entry) {
  return b.bundle()
    .on('error', function (err) {
      console.log(`${err}`.red)
    })
    .pipe(source(entry))
    .pipe(through.obj(function (file, enc, done) {
      file.base = path.resolve(entry.split(path.sep).shift())
      this.push(file)
      done()
    }))
    .pipe(dest('dist'))
}
