function fibonacci(n) {
  const cache = new Map([[0, 0], [1, 1]]);

  function _fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
      throw new Error('n must be a non-negative integer');
    }

    if (cache.has(n)) {
      return cache.get(n);
    }

    return _fibonacci(n - 1) + _fibonacci(n - 2);
  }

  return _fibonacci(n);
}

console.log('fibonacci(10) :: ', fibonacci(10));
