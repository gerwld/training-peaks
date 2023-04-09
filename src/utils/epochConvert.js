
export const epochDateConvert = (date, isEpoch, convertToDays) => {
 if (date && (typeof date !== "undefined" || date !== null)) {
  if (isEpoch) {
   let humanDate = new Date(Number(date))
   let dateString = new Date(humanDate.getTime() - humanDate.getTimezoneOffset() * 60000).toISOString().split("T")[0]
   return dateString
  } 
  else if(!isEpoch && !convertToDays) {
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


export const epochDayConvert = (date, isEpoch, convertToDateMs) => {
  if (date && (typeof date !== "undefined" || date !== null)) {
   if (isEpoch) {
    
   } 
   else if(!isEpoch && !convertToDateMs) {
    let dateFixed = epochDateConvert(date);
    let daysFromEpoch = Number(Math.floor(dateFixed/8.64e7));
    return daysFromEpoch;
   }
   else if(convertToDateMs) {
   
    }
  }
 }