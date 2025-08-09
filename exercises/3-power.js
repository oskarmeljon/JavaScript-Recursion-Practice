function power(base, exp) {
  if (exp === 0) return 1;
  
  return exp >= 0 
    ? base * power(base, exp - 1) 
    : 1 / base * power(base, exp + 1);
}

console.log('power(2, -3) :: ', power(2, -3));