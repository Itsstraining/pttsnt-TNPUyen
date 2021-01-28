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
  n = Number(n);
  let result = [];
  if(n == 0){
    result.push(0);
    return result.join()
  }

  let arrPrime = findPrime(100000);
  let count = 0;
  for (let i = 0; i < arrPrime.length; i++) {
    while (n % arrPrime[i] == 0) {
      result.push(arrPrime[i]);
      n = n / arrPrime[i];
      count++;
    }
  }
  return result.join(' ');
}

module.exports = main;