const epochConvert = (date, isEpoch) => {
  if(date && typeof date !== 'undefined') {
  if (isEpoch) {
    let datee = new Date(date * 1000);
    let dateString = new Date(datee.getTime() - (datee.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
                    return dateString
  }
  return Date.parse(date) / 1000;
}
}

export default epochConvert;