function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];
  
    for (const number of numbers) {
      if (number % 2 === 0) {
        // number is even
        even.push(number);
      } else {
        // number is not even (=odd)
        odd.push(number);
      }
    }
  
    // create an object with the odd and even array in it
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }
  console.log(splitOddAndEven([12, 2, 4,5,11]));