import axios from "axios"
import { instance } from "./instance"

export default class TrainService {
  static async getTrains(payload) {
    return instance.get("/trains", payload)
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
