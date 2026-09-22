function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const combine = [];
  for (let i = 0; i < list1.length; i++) {
    combine.push(list1[i], list2[i]);
  }
  return combine;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  const combine: unknown[] = [];
  list1.forEach((element, index) => combine.push(element, list2[index]));
  return combine;
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
