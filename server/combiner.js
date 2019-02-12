const VCalendar = require('cozy-ical').VCalendar
const VEvent = require('cozy-ical').VEvent
const VAlarm = require('cozy-ical').VAlarm
const ICalParser = require('cozy-ical').ICalParser

module.exports = (function() {
  'use-strict'
  let module = {}

  function _parseCal(calBuffer){
    return new Promise ((resolve) => {
      let parser = new ICalParser();
      parser.parseString(calBuffer.toString(), (err, cal) => {
        resolve(cal)
      })
    })
  }

  module.combineCals = function (calFiles, target, owners){
    _parseCal(calFiles[0].buffer).then(res => {
      console.log('TARGET: ', target)
      console.log('OWNERS: ', owners)
      console.log('BUFFER CONTENT: ', res)
    })
  }
  return module
})()