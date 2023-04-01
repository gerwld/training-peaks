export default {
  createEvent(plainEventObject) {
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
  },
}
