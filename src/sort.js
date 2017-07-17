// (function () {
  'use strict';

  const insertionSort = function (array) {
    if(!Array.isArray(array)) {
      throw 'Need an array';
    };

    for(let i = 1; i < array.length; i++) {
      const currentValue = array[i];
      let j;

      for(j = i - 1; j >= 0; j--) {
        if(array[j] <= currentValue) break;
        array[j + 1] = array[j]
      }

      array[j + 1] = currentValue;
    }

    return array;
  }

// }());
