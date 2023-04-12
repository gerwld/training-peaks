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

 return allDaysWithFreeDaysSorted;
}
