
export const epochDateConvert = (date, isEpoch, convertToDays) => {
 if (date && (typeof date !== "undefined" || date !== null)) {
  if (isEpoch) {
   let humanDate = new Date(Number(date))
   return new Date(humanDate.getTime() - humanDate.getTimezoneOffset() * 60000).toISOString().split("T")[0]
  } 
  else if(!isEpoch && !convertToDays) {
  return Date.parse(date)
  }
  if(convertToDays) {
    let dateFixed = String(date).padEnd(13, "0").slice(0, 13)
    return (dateFixed - (dateFixed % 86400000)) / 86400000;
   }
 }
}

export const epochDayConvert = (date, isEpoch) => {
  if (typeof date !== "undefined" || date !== null) {
   if (isEpoch) {
    return (new Date(date * 86400000));
   } 
   else {
    let dateFixed = Date.parse(date);
    return Math.round(dateFixed / 86400000);
   }
  }
 }