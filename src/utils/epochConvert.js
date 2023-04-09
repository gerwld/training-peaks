const epochConvert = (date, isEpoch) => {
 if (date && (typeof date === "string" || typeof date === "number")) {
  if (isEpoch) {
   let humanDate = new Date(Number(date))
   let dateString = new Date(humanDate.getTime() - humanDate.getTimezoneOffset() * 60000).toISOString().split("T")[0]
   return dateString
  } 
  else {
   let epochMs = Math.floor(Date.parse(date))
   let dateFixed = String(epochMs).padEnd(13, "0").slice(0, 13)
   return dateFixed
  }
 }
}

export default epochConvert
