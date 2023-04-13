import axios from "axios"
import { instance } from "."

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

  static async createTrain(plainTrainObject) {
    return await instance.post("/trains", plainTrainObject)
  }

  static async updateTrain(payload) {
    return instance.put(`/trains/${payload.id}`, payload)
  }


  static async deleteTrain(eventID) {
    return instance.delete(`/trains/${eventID}`)
  }
}
