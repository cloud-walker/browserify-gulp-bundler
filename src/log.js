import colors from 'colors'
import moment from 'moment'

const emblem = `[${'JS'.yellow}]`

export default function (msg) {
  let time = `[${moment().format('HH:mm:ss').grey}]`

  console.log(time, emblem, msg)
}
