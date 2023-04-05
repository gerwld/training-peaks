import { instance } from "./instance"

export default class StatisticService {
 static async getRunDistance(fromEpochDay, toEpochDay) {
  instance.get("/statistics/run-distance-statistic", {
   params: {
    fromEpochDay,
    toEpochDay,
   },
  })
 }
}
