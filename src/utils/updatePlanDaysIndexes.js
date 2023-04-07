export default function updatePlanDaysIndexes(arr, key) {
  if(arr?.length) {
    //sort by key
    const newObj = [...arr].sort((a, b) => a[key] - b[key]);

    //return with fixed key +1 progression
    return newObj.map((el, i) =>  ({...el, [key]: i + 1}));
  } 
  return []
};
