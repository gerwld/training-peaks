const epochConvert = (date, isEpoch) => {
  if(date && typeof date !== 'undefined') {
  if (isEpoch) {
    let datee = new Date(date);
    let dateString = new Date(datee.getTime() - (datee.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
                    return dateString
  }
  return Date.parse(date);
}
}

export default epochConvert;