function decimalToBinary(decimal) {
  // Initialize an empty binary string
  let binary = '';

  // Convert decimal to binary
  while (decimal > 0) {
    // Get the remainder when dividing by 2
    let remainder = decimal % 2;

    // Add the remainder to the binary string
    binary = remainder + binary;

    // Update the decimal by dividing by 2
    decimal = Math.floor(decimal / 2);
  }

  // Return the binary representation
  return binary;

