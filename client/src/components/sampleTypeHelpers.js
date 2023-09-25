function computeAvg(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid or empty data array.");
    }
  
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] !== "number" || isNaN(data[i])) {
        throw new Error("Invalid data type in the array.");
      }
      sum += data[i];
    }
  
    return sum / data.length;
  }
  
  function findMin(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid or empty data array.");
    }
  
    let min = data[0];
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] !== "number" || isNaN(data[i])) {
        throw new Error("Invalid data type in the array.");
      }
      if (data[i] < min) {
        min = data[i];
      }
    }
  
    return min;
  }
  
  function findMax(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid or empty data array.");
    }
  
    let max = data[0];
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] !== "number" || isNaN(data[i])) {
        throw new Error("Invalid data type in the array.");
      }
      if (data[i] > max) {
        max = data[i];
      }
    }
  
    return max;
  }
  
export { computeAvg, findMin, findMax };
  