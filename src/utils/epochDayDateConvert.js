//convert epochDay to epochDate and vice versa
export default function epochDayDateConvert(epoch) {
  const dateFixed = String(epoch).padEnd(13,'0').slice(0, 13);
 if (epoch) {
  return dateFixed - (dateFixed % 86400000);
 }
}
