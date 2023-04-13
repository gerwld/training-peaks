import { instance } from "."

export default class StatisticService {
 static async getRunDistance(fromEpochDay, toEpochDay) {
  return instance.get("/statistics/run-distance-statistic", {
   params: {
    fromEpochDay,
    toEpochDay,
   },
  })
 }
}
