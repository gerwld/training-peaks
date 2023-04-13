import { getDaysWithFreeDays } from "./getDaysWithFreeDays";

export const planDaysWithEpoch = (arr, epochStart) => {
  let days = getDaysWithFreeDays(arr);
  let daysWithEpoch = days.map((e, i) => ({...e, epochDay: epochStart + i}))
  return daysWithEpoch;
}