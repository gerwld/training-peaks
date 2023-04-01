import TrainService from "@/api/TrainService";

export function createEvent(plainEventObject) {
  return async (dispatch) => {
    return TrainService.createTrain(plainEventObject).then((newEventId) => {
      dispatch({
        type: "CREATE_EVENT",
        plainEventObject: {
          id: newEventId,
          ...plainEventObject,
        },
      })
    })
  }
}
