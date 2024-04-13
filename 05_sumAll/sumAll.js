const sumAll = function (start, end) {
  let sum = 0;

  // Check if start or end is negative
  if (start < 0 || end < 0) {
    return "ERROR";
  }
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    isNaN(start) ||
    isNaN(end)
  ) {
    return "ERROR";
  }

  if (start > end) {
    // Corrected swapping logic
    const temp = start;
    start = end; // Corrected assignment
    end = temp; // Corrected assignment
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(1, 10));

// Do not edit below this line
module.exports = sumAll;
