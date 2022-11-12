export default function orderByProps(obj, sortingDemand) {
  const sortedByDemand = [];
  const sortingRest = [];
  const sortedRest = [];

  for (const prop in obj) {
    if (sortingDemand.includes(prop)) {
      sortedByDemand.push({ key: prop, value: obj[prop] });
    }
  }

  for (const prop in obj) {
    if (!sortingDemand.includes(prop)) {
      sortingRest.push(prop);
    }
  }
  sortingRest.sort();

  for (const item of sortingRest) {
    sortedRest.push({ key: item, value: obj[item] });
  }

  const sortedFinal = [...sortedByDemand, ...sortedRest];
  return sortedFinal;
}
