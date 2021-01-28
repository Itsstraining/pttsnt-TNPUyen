// Add new functions, variables here

function main(input) {
  // Your code goes here
  // Using console.log to answer the question

  console.log(convert(input))
}

function findPrime(n) {
  let primeList = [];
  let num = 2;
  for (let i = 0; primeList.length < n; i++) {
    let dem = 0;
    if (num == 2) {
      primeList.push(num)
    }
    for (let j = 2; j < Math.sqrt(num) + 1; j++) {
      if (num % j == 0) {
        dem++;
      }
    }
    if (dem == 0) {
      primeList.push(num)
    }
    num++;
  }
  return primeList;
}

function convert(n) {
  n = Number(n)
  let arrPrime = findPrime(n);
  let result = '';
  let count = 0;
  for (let i = 0; i < arrPrime.length; i++) {
    while (n % arrPrime[i] == 0) {
      if(result == ''){
        result = `${arrPrime[i]}`
      }else{
        result = `${result} ${arrPrime[i]}`;
      }
      n = n / arrPrime[i];
      count++;
    }
  }
  return result;
  
}

module.exports = main;