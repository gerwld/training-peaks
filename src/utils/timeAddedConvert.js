import epochConvert from "./epochConvert";

const timeAddedConvert = (createdAt, epochDate) => {
  const timeAdded = createdAt.split('T')[1];
  const date = `${epochConvert(epochDate, true)}T${timeAdded}`;

  return date;

}

export default timeAddedConvert;