import glob           from 'glob'
import colors         from 'colors'
import log            from './log'
import generateStream from './generateStream'
import es             from 'event-stream'

/**
 * @param  {String} pattern [Glob pattern]
 * @param  {Object} opts    [Configuration options]
 * @return {Mixed}         [Browserify stream or false]
 */
export default function (pattern, opts = {}) {
  const entries = glob.sync(pattern)

  switch (entries.length) {
    case 0:
      log(`${'No bundle found'.yellow}...`)
      return false
    case 1:
      return generateStream(entries[0], opts)
    default:
      const streams = entries.map(function (entry) {
        return generateStream(entry, opts)
      })
      return es.merge(streams)
  }
}
