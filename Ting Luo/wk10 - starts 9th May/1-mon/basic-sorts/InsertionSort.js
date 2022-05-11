function insertionSort (items) {
  // Loop through each element
  for (let i = 1; i< items.length; i++){
  // store the current item value so it can be placed correctly
    let value = items[i]; 
  // in the sorted portion of the array
  let j = i-1;
  while ((j>-1) && items[j] > value ){
  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with
    items[j+1] = items[j];
    j--;
  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)
  }
  // We can now insert the item in its sorted location
    items[j+1] = value;
  }
  // Remember to return the list!
  return items;

}

module.exports = insertionSort;
