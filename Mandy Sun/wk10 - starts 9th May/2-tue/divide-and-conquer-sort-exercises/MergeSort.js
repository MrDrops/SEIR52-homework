function mergeSort(arr) {
  const length = arr.length;
  if(length < 2){
    return arr
  }
  const middle = Math.floor(length/2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

module.exports = mergeSort;
