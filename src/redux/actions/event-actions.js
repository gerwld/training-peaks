import TrainService from "@/api/TrainService"
import epochConvert from "@/utils/epochConvert";

export function createEvent(plainEventObject) {
  return async (dispatch) => {
    return TrainService.createTrain(plainEventObject)
      .then(({data}) => {
        const date = epochConvert(data.epochDate * 1000, true);
        dispatch({
          type: "CREATE_EVENT",
          plainEventObject: {...data, start:date},
        })
      })
      .catch((error) => console.log(error))
  }
}
