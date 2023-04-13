import {epochDateConvert} from ".";

const timeAddedConvert = (createdAt, epochDate) => {
  const timeAdded = createdAt.split('T')[1];
  const date = `${epochDateConvert(epochDate, true)}T${timeAdded}`.split('.')[0];

  return date;

}

export default timeAddedConvert;