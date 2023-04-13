import {epochDateConvert} from "."

const findFeelByDate = (date, feelsArray) => {
 if (date && feelsArray) {
  const epochDate = epochDateConvert(date)
  return feelsArray.find((e) => Number(e.epochDay) === Number(epochDate))
 }
 return null
}

export default findFeelByDate
