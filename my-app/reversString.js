function reversString(str) {
    let newString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

// console.log(reversString('Satish'));

function reversArray() {
    let arr = ['10','5','12','1','9', '2', '7','1']
    const result = arr.reverse();

    return result;
}

 // console.log(reversArray())
 async function sortArray() {
  
    let getPreviousArray = await reversArray()

   let sortArray =  getPreviousArray.sort((a, b) => a - b)
   // let sortedArray = Array.isArray(array)? array.sort():

 console.log('arr', sortArray)
 }


  sortArray()