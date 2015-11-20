import glob           from 'glob'
import colors         from 'colors'
import log            from './log'
import generateStream from './generateStream'

/**
 * @param  {String} pattern [Glob pattern]
 * @param  {Object} opts    [Configuration options]
 * @return {Mixed}         [Browserify stream or false]
 */
export default function (pattern, opts = {}) {
  const entries = glob.sync(pattern)

  // console.log(entries)

  switch (entries.length) {
    case 0:
      log(`${'No bundle found'.yellow}...`)
      return false
    case 1:
      return generateStream(entries[0], opts)
    default:
      log('Multiple bundles not supported yet..'.red)
      return false
  }
}
