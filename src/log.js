import colors from 'colors'
import moment from 'moment'

let time   = `[${moment().format('HH:mm:ss').grey}]`
let emblem = `[${'JS'.yellow}]`

export default function (msg) {
  console.log(time, emblem, msg)
}
