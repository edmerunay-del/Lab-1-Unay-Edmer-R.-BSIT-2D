function calculateTotal(...numbers) {
  return numbers.reduce((accumulator, current) => {
    
    if (typeof current !== 'number' || Number.isNaN(current)) {
      throw new TypeError("Invalid input: All arguments must be numbers");
    }
    
    return accumulator + current;
  }, 0); 
}