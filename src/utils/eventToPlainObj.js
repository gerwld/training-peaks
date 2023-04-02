import epochConvert from "./epochConvert";

const eventToPlainObj = (event) => {
  let plain = event.toPlainObject();
  return {
      id: plain.id / 1,
      name: plain.extendedProps.name,
      description: plain.extendedProps.description,
      link: plain.extendedProps.link,
      distance: plain.extendedProps.distance,
      epochDate: epochConvert(plain.start),
      start: plain.start,
  }
}

export default eventToPlainObj;