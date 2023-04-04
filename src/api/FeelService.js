import { instance } from "./instance";

export default class FeelService {
  static async getAllFeels(fromEpochDay, toEpochDay) {
    return instance.get("/feels", {
      params: {
        fromEpochDay, 
        toEpochDay
      }
    })
  }
  static async createFeel(payload) {
    return instance.post("/feels", payload)
  }
  static async getFeelById(id) {
    return instance.get("/feels", id)
  }
  static async updateFeel(id) {
    return instance.put("/feels", id)
  }
  static async deleteFeel(id) {
    return instance.delete("/feels", id)
  }
}