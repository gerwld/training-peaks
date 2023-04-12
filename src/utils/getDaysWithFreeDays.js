import { v4 as udid } from "uuid"

export const getDaysWithFreeDays = (daysWidthoutFree) => {
  let days = structuredClone(daysWidthoutFree);
  
 let allTrainDays = [...days].map((e) => e.planDayNumber)
 let maxDay = allTrainDays.sort((a, b) => b - a)[0]
 
 if(!maxDay) return [];
 let allFreeDays = [...Array(maxDay)].map((_, i) => i + 1).filter((e) => allTrainDays.indexOf(e) === -1)
 let allFreeDaysArr = [...allFreeDays].map((e) => ({ isFreeDay: true, planDayNumber: e, id: udid() }))
 let allDaysWithFreeDays = [...[...days].map((e) => ({ ...e, isFreeDay: false })), ...allFreeDaysArr];
 let allDaysWithFreeDaysSorted = allDaysWithFreeDays.sort((a, b) => a.planDayNumber - b.planDayNumber);
 let allDaysWithFreeDaysSortedUnique = 
  [...allDaysWithFreeDaysSorted].filter((e, i) => {
    if(i === 0 || e.planDayNumber !== allDaysWithFreeDaysSorted[i - 1].planDayNumber) return true;
    return false
 })

 return allDaysWithFreeDaysSortedUnique;
}


export const getDaysWithoutFreeDays = (daysFromState) => {
  let days = structuredClone(daysFromState);
  if (!days?.length) return [];

  let daysWithoutFree = days.filter(e => !e?.isFreeDay)
  let daysWithoutFreeCropped = daysWithoutFree.map(e => {
    delete e.isFreeDay;
    return e;
  })

  let daysWithoutFreeCroppedSorted = daysWithoutFreeCropped.sort((a, b) => a.planDayNumber - b.planDayNumber);
  let daysWithoutFreeCroppedSortedUnique = 
  [...daysWithoutFreeCroppedSorted].filter((e, i) => {
    if(i === 0 || e.planDayNumber !== daysWithoutFreeCroppedSorted[i - 1].planDayNumber) return true;
    return false
 })

  return daysWithoutFreeCroppedSortedUnique;
}