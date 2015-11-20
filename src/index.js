import glob   from 'glob'
import colors from 'colors'
import log    from './log.js'

export default function (pattern, opts = {}) {
  const entries = glob.sync(pattern)

  if (entries.length < 1) {
  }
  switch (entries.length) {
    case 0:
      log(`${'No bundle found'.yellow}...`)
      break
    case 1:

    default:

  }

  return entries
}

function generateBundle(entry) {
  const b = browserify({
    cache       : {},
    packageCache: {},
    fullPaths   : true
  })

  b.add(entry)

  return bundle(b, entry)
}

function bundle(b, entry) {
  return b.bundle()
}
