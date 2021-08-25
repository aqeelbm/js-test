export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here
  if(array.length === 0) return initialValue;

  let accumulator = initialValue;
    for (const val of array) {
      accumulator = reducer(accumulator, val);
    }
    return accumulator;

}

let reducer = (acc, curr) =>
{
  if(typeof curr === 'string') {
    acc.concat(curr)
  } else {
    acc += curr
  }

  return acc
}
