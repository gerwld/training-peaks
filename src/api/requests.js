import { excludeById, getTodayStr } from '@/utils'

/*
functions that simulate network requests
*/

let todayStr = getTodayStr()
let eventGuid = 0;

const DELAY = 200
let simulateErrors = false

export function requestEventsInRange(startStr, endStr) {
  console.log(`[STUB] requesting events from ${startStr} to ${endStr}`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        resolve(eventDb) // won't use the start/end, always return whole DB
      }
    }, DELAY)
  })
}

export function requestEventCreate(plainEventObject) {
  console.log('[STUB] requesting event create:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        let newEventId = createEventId()
        let objWithId = {...plainEventObject, id: newEventId}
        eventDb.push(objWithId)
        resolve(newEventId)
      }
    }, DELAY)
  })
}

export function requestEventUpdate(plainEventObject) {
  console.log('[STUB] requesting event update:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, plainEventObject.id)
        eventDb.push(plainEventObject)
        resolve(eventDb)
      }
    }, DELAY)
  })
}

export function requestEventDelete(eventId) {
  console.log('[STUB] requesting event delete, id:', eventId)

  return new Promise((resolve, reject) => {
    setTimeout(() => { // simulate network delay
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, eventId)
        resolve(eventDb)
      }
    }, DELAY)
  })
}

export function createEventId() {
  return String(eventGuid++)
}
