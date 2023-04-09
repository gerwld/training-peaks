
export const epochDateConvert = (date, isEpoch, convertToDays) => {
 if (typeof date !== "undefined" || date !== null) {
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
  if(convertToDays) {
    let dateFixed = String(date).padEnd(13, "0").slice(0, 13)
    return dateFixed - (dateFixed % 86400000);
   }
 }
}


export const epochDayConvert = (date, isEpoch, convertToDateMs) => {
  if (typeof date !== "undefined" || date !== null) {
   if (isEpoch) {
    return (new Date(date * 8.64e7));
   } 
   else if(!isEpoch && !convertToDateMs) {
    let dateFixed = epochDateConvert(date);
    let daysFromEpoch = Number(Math.floor((dateFixed - (dateFixed % 86400000))/8.64e7));
    return daysFromEpoch;
   }
   else if(convertToDateMs) {
   
    }
  }
 }

 

 export function epochDay(epochDate) {
  // convert epochDate to seconds since midnight
  var seconds = epochDate % 86400;
  
  // subtract seconds from epochDate to get midnight on the same day
  var midnight = epochDate - seconds;
  
  // divide by number of seconds in a day to get number of days since epoch
  var days = midnight / 86400;
  
  // return the result
  return days;
}