function elevar(base,exponente){
  if(exponente === 0){
    return 1;
  } else {
    return base * elevar(base,exponente-1);
  }
}

console.log(elevar(3,3));

const factorial = (n) => {
  // Caso base: cuando n es 0 o 1, el factorial es 1
  if (n === 0 || n === 1) {
      return 1;
  }
  // Llamada recursiva: multiplicamos n por el factorial de (n-1)
  return n * factorial(n - 1);
};

console.log(factorial(4)); // Imprime: 120