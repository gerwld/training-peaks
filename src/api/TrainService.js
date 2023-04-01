import { instance } from "./instance";

export default class TrainService {

  
  static async getTrains(payload) {
    return instance.get("/trains", payload);
  }


  static async getTrain(id) {
    return instance.get(`/trains/${id}'`);
  }


  static async createTrain(plainEventObject) {
    let newEventId = createEventId();
    let objWithId = { ...plainEventObject, id: newEventId };

    return instance
      .post("/trains", objWithId)
      .then((_) => newEventId)
      .catch((error) => new Error(error));
  }


  static async updateTrain(id, payload) {
    return instance.put(`/trains/${id}`, payload);
  }


}
