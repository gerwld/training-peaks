const epochConvert = (date, isEpoch, convertToDays) => {
 if (date && (typeof date !== "undefined" || date !== null)) {
  if (isEpoch) {
   let humanDate = new Date(Number(date))
   let dateString = new Date(humanDate.getTime() - humanDate.getTimezoneOffset() * 60000).toISOString().split("T")[0]
   return dateString
  } 
  else if(!isEpoch) {
   let epochMs = Math.floor(Date.parse(date))
   let dateFixed = String(epochMs).padEnd(13, "0").slice(0, 13)
   return Number(dateFixed)
  }
  else if(convertToDays) {
    let dateFixed = String(date).padEnd(13, "0").slice(0, 13)
    return dateFixed - (dateFixed % 86400000);
   }
 }
}

export default epochConvert
