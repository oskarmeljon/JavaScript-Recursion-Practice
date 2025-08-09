## JavaScript Recursion Practice

Guidelines:
- Prefer pure functions.
- Avoid loops unless the prompt says otherwise.
- Always define a clear base case and a recursive step.
- When results repeat (like Fibonacci), consider memoization.

### Warm‑ups
1) sumRange(n): Return 1 + 2 + ... + n.
```js
sumRange(5) // 15
```

2) factorial(n): Return n!. Treat 0! = 1; reject negatives.
```js
factorial(5) // 120
```

3) power(base, exp): Compute base^exp for integer exp (handle exp < 0 by returning 1 / base^|exp|).
```js
power(2, -3) // 0.125
```

4) fibonacci(n): Return nth Fibonacci (fib(0)=0, fib(1)=1). Add memoization after the plain recursive version.
```js
fibonacci(10) // 55
```

5) gcd(a, b): Euclid’s algorithm recursively.
```js
gcd(48, 18) // 6
```

### Arrays and strings
6) sumArray(arr): Sum all numbers in an array (no loops).
```js
sumArray([1,2,3,4]) // 10
```

7) productOfArray(arr): Multiply all numbers (return 1 for empty).
```js
productOfArray([2,3,4]) // 24
```

8) maxInArray(arr): Return maximum (assume non-empty).
```js
maxInArray([3,9,1,7]) // 9
```

9) reverseString(str): Return reversed string.
```js
reverseString("recursion") // "noisrucer"
```

10) isPalindrome(str): Return true if str equals its reverse.
```js
isPalindrome("racecar") // true
```

11) flatten(arr): Flatten arbitrarily nested arrays (e.g., [1,[2,[3]],4] -> [1,2,3,4]).
```js
flatten([1,[2,[3]],4]) // [1,2,3,4]
```

12) deepCount(arr): Count total elements including inside nested arrays.
```js
deepCount([1,[2,[3]],4]) // 6
```

### Numbers and conversions
13) sumOfDigits(n): Sum digits; handle negatives by using absolute value.
```js
sumOfDigits(-9012) // 12
```

14) countDigits(n): Count digits of integer (0 has 1 digit).
```js
countDigits(12345) // 5
```

15) decimalToBinary(n): Return binary string for non-negative n.
```js
decimalToBinary(13) // "1101"
```

### Nested objects
16) nestedEvenSum(obj): Sum all even number values in a deeply nested object.
```js
nestedEvenSum({a:2, b:{c:4, d:{e:5}}}) // 6
```

17) collectStrings(obj): Return array of all string values in a nested object.
```js
collectStrings({a:"x", b:{c:"y", d:3}}) // ["x","y"]
```

18) deepClone(value): Recursively clone arrays and plain objects (ignore Dates/Maps/etc).
```js
const original = {a:{b:[1,2]}};
const copy = deepClone(original);
copy.a.b[0] = 99; // original unchanged
```

19) deepEqual(a, b): Structural deep equality for arrays/objects (ignore prototypes).
```js
deepEqual({x:[1,2]}, {x:[1,2]}) // true
```

20) stringifyNumbers(obj): Return a new object where all number values are converted to strings (deep).
```js
stringifyNumbers({a:1, b:{c:2}}) // {a:"1", b:{c:"2"}}
```

### Trees
Assume binary tree nodes: { value, left, right } or null.

21) sumTree(root): Sum all node values.
```js
sumTree({value:1,left:{value:2,left:null,right:null},right:{value:3,left:null,right:null}}) // 6
```

22) maxDepth(root): Return the maximum depth of the tree.
```js
maxDepth({value:1,left:null,right:null}) // 1
```

23) isBST(root): Verify BST property recursively (pass down min/max bounds).
```js
isBST(validBstRoot) // true
```

### Backtracking and divide‑and‑conquer
24) permutations(arr): Return all permutations of the array.
```js
permutations([1,2,3]).length // 6
```

25) subsets(arr): Return the power set of the array.
```js
subsets([1,2]) // [[],[1],[2],[1,2]]
```

26) generateParentheses(n): All balanced parentheses strings with n pairs.
```js
generateParentheses(3) // ["((()))","(()())","(())()","()(())","()()()"]
```

27) mergeSort(arr): Implement merge sort recursively.
```js
mergeSort([5,2,4,6,1,3]) // [1,2,3,4,5,6]
```

### Bonus challenges
28) tailSum(arr, acc=0): Tail‑recursive sum for large arrays; note: JS TCO is not guaranteed.

29) pathSum(grid, r=0, c=0): Count paths from top‑left to bottom‑right moving only right/down (use memoization).

30) evaluate(expr): Recursively evaluate a simple arithmetic AST like {op:"+", left:..., right:...}.

### Memoization tips (Fibonacci example)
- Use a persistent cache (e.g., a closure with a Map) when you call the function multiple times.
- Prefer `Map` for numeric keys and to avoid prototype pitfalls.

```js
// Persistent cache via closure
const fibonacci = (() => {
  const cache = new Map([[0, 0], [1, 1]]);
  function fib(n) {
    if (!Number.isInteger(n) || n < 0) throw new Error('n must be a non-negative integer');
    if (cache.has(n)) return cache.get(n);
    const value = fib(n - 1) + fib(n - 2);
    cache.set(n, value);
    return value;
  }
  return fib;
})();

// Per-call cache via parameter
function fibonacciParam(n, cache = new Map([[0, 0], [1, 1]])) {
  if (!Number.isInteger(n) || n < 0) throw new Error('n must be a non-negative integer');
  if (cache.has(n)) return cache.get(n);
  const value = fibonacciParam(n - 1, cache) + fibonacciParam(n - 2, cache);
  cache.set(n, value);
  return value;
}
```

Happy recursing! 🚀

