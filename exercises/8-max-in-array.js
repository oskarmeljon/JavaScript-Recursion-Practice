function maxInArray(arr) {
  if (arr.length === 0) return null;
  return Math.max(arr[0], maxInArray(arr.slice(1)));
}

console.log('maxInArray([3,9,1,7]) :: ', maxInArray([3,9,1,7]));