import axios from "axios"
import { instance } from "./instance"

export default class TrainService {
  static async getTrains(fromEpochDate, toEpochDate) {
    return instance.get("/trains", {
      params: {
        fromEpochDate, 
        toEpochDate
      }
    })
  }

  static async getTrain(id) {
    return instance.get(`/trains/${id}'`)
  }

  static async createTrain(plainEventObject) {
    return await instance.post("/trains", plainEventObject)
  }

  static async updateTrain(id, payload) {
    return instance.put(`/trains/${id}`, payload)
  }
}
