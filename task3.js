//1
function calculateSumAndProduct(n) {
    if (n <= 2) throw new Error("Input should be greater than 2");
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let sum = numbers[0] + numbers[1];
    let product = numbers.slice(2).reduce((acc, curr) => acc * curr, 1);
    return [sum, product];
  }
  
  
  console.log(calculateSumAndProduct(5)); 
  console.log(calculateSumAndProduct(3)); 
  
  //2
  function getCity(user) {
    const { banks } = user || {};
    if (banks && banks[2]) {
      const { address: { city } = {} } = banks[2];
      return city;
    }
    return undefined;
  }
  
  
  console.log(getCity({ banks: [{}, {}, { address: { city: "New York" } }] })); 
  console.log(getCity({ banks: [{}, {}] })); 
  
  //3
  function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    let copy = Array.isArray(obj) ? [] : { ...obj };
    for (let key in copy) {
      copy[key] = deepCopy(copy[key]);
    }
    return copy;
  }

  const originalObj = { name: "John", age: 30, address: { street: "Main St", city: "Boston" } };
  const copiedObj = deepCopy(originalObj);
  console.log(copiedObj); 
  console.log(copiedObj !== originalObj); 
  console.log(copiedObj.address !== originalObj.address); 
  