const removeFromArray = function(arr, ...itemsToRemove) {
  for(let j = 0; j < itemsToRemove.length; j++) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === itemsToRemove[j]) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
