// Fungsi kalkulator dengan menggunakan arrow function dan spread operator
const calculator = (operator, ...operands) => {
    switch (operator) {
      case '+':
        return operands.reduce((a, b) => a + b);
      case '-':
        return operands.reduce((a, b) => a - b);
      case '*':
        return operands.reduce((a, b) => a * b);
      case '/':
        return operands.reduce((a, b) => a / b);
      case '%':
        return operands.reduce((a, b) => a % b);
      default:
        return 'Invalid operator';
    }
  }
  // Contoh penggunaan kalkulator
  console.log(calculator('+', 2, 3, 4)); // Output: 9
  console.log(calculator('-', 10, 5, 2)); // Output: 3
  console.log(calculator('*', 3, 5, 2)); // Output: 30
  console.log(calculator('/', 100, 5, 2)); // Output: 10
  console.log(calculator('%', 10, 3)); // Output: 1
  console.log(calculator('^', 2, 3)); // Output: Invalid operator  