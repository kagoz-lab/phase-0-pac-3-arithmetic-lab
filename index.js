

function subtract(x, y) {
    return x - y;
  }
  function add(x, y) {
    return x + y;
  }

  function multiply(a, b) {
    return a * b;
  }
  
 function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero!";
    }
    return a / b;
  }

  function increment(n) {
    return n + 1;
  }

  function decrement(n) {
    return n - 1;
  }

  function makeInt(n) {
    return parseInt(n, 10);
  }
  


  function preserveDecimal(n) {
    return parseFloat(n);
  }

  // Test the function
  console.log(preserveDecimal("3.1415"));
  console.log(preserveDecimal("20.5px"));
  console.log(preserveDecimal("kevin"));
  console.log(preserveDecimal("1234"));
  console.log(preserveDecimal(".42"));
  
