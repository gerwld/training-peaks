import epochConvert from "./epochConvert"

const findFeelByDate = (date, feelsArray) => {
 if (date && feelsArray) {
  const epochDate = epochConvert(date)
  return feelsArray.find((e) => Number(e.epochDay) === Number(epochDate))
 }
 return null
}

export default findFeelByDate
