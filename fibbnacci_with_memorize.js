{
    function memoize(fn) {
      const cache = {};
      return function(...args) {
        if (cache[args]) {
          return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
      };
    }

    function slowFib(n) {
      if (n < 2) {
        return n;
      }

      return fibn(n - 1) + fibn(n - 2);
    }

    let fibn = memoize(slowFib);


    fibn(8);
}
