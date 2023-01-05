/*const removeFromArray = function(arr, ...itemsToRemove) {
		let newArr = [];
    for(let i = 0; i < arr.length; i++) {
    	for(let j = 0; j < itemsToRemove.length; j++) {
      	console.log(`${arr[i]} === ${itemsToRemove[j]}`);
      	if(arr[i] === itemsToRemove[j]) {
    			continue;
    		}
      	else {
      		newArr.push(arr[i]);
        	//console.log(arr[i]);
      	}
      }	
    }
    return newArr;
};*/

const removeFromArray = function(arr, ...itemsToRemove) {
    let newArr = [];
for(let j = 0; j < itemsToRemove.length; j++) {
    for(let i = 0; i < arr.length; i++) {
      console.log(`${arr[i]} === ${itemsToRemove[j]}`);
      if(arr[i] === itemsToRemove[j]) {
            continue;
        }
      else {
          newArr.push(arr[i]);
        //console.log(arr[i]);
      }
  }	
}
return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
