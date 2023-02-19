// let arr=[1,2,3,4,5];
// console.log(arr.length); //output - 5

//1. CONCAT METHOD - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// SYNTAX - concat(value0, value1)

// let array1 = ['abc', 'def', 'dfr'];
// let array2 = [1,2,3,34,5];
// let array3 = array1.concat(array2);
// console.log(array3); //output - ['abc', 'def', 'dfr', 1,     2,     3, 34,    5]

//2. COPYWITHING METHOD - The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
//SYNTAX - copyWithin(target,start,end)

// let num = [1,2,3,4,5,6];
// console.log(num.copyWithin(2,0,3)); //output - [ 1, 2, 1, 2, 3, 6 ]

//3. EVERY METHOD - The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// SYNTAX - every((element, index, array))

// const isBelowThreshold = (currentValue) => currentValue < 40;
// let num = [34, 2, 6, 1, 22];
// console.log(num.every(isBelowThreshold)); // Output - True

//4. FILTER METHOD - The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// let words = ['Push', 'pop', 'filter', 'map', 'every']
// let result = words.filter(word => word.length <=3);
// console.log(result); //Output - [ 'pop', 'map' ]

//5. FLAT METHOD - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// let arr1 = [1,2,3,4,[5,3],[[5,7]]];
// console.log(arr1.flat()); //OUTPUT - [ 1, 2, 3, 4, 5, 3, [ 5, 7 ] ]

// let arr2 = [1,2,3,4,[5,3],[[5,7]]];
// console.log(arr2.flat(2)); //OUTPUT - [1, 2, 3, 4,5, 3, 5, 7]

//6.FOR EACH METHOD - The forEach() method executes a provided function once for each array element.

// let arr1 =['abc', 'def', 'ghi'];
// arr1.forEach(element => console.log(element));

//7. INDEX OF METHOD - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// let arr1 = [1,2,3,4,5,3,5,7];
// console.log(arr1.indexOf(4)); //OUTPUT - 3

//8. LAST INDEX OF - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// let arr1 = [1,2,3,4,5,3,5,7];
// console.log(arr1.lastIndexOf(3)); //OUTPUT - 5

//7. MAP - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// let arr1 = [1,4,9,16,25];
// console.log(arr1.map(Math.sqrt)); //OUTPUT - [ 1, 2, 3, 4, 5 ]

//8. REVERSE METHOD - The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

// let num = [1,2,3,4,5,6,6,7,8];
// console.log(num.reverse()); //OUTPUT - [ 8, 7, 6, 6, 5, 4, 3, 2, 1]

//9 SLICE - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//slice(start, end)

// let num = [1,2,3,4,5,6,6,7,8];
// console.log(num.slice(2,5)); //OUTPUT - [ 3, 4, 5 ]

//SOME METHOD - The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// const array = [1, 2, 3, 4, 5];
// console.log(array.some(element => element%2 == 0)); //OUTPUT - true


//10. SORT METHOD -  The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// let num = [3,5,4,2,66,7,7,33,1,100000];
// console.log(num.sort());
// //OUTPUT - [ 1,100000,2,3,33, 4, 5,66,7,7] => here 10000 comes befor 2, 3,... because 10000 will be converted into string '100000' and in the unicode the 100000 has code values less  than 2,3,....

//11. SPLICE- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// let months = ['jan','feb','april','may','june'];
// months.splice(2,0,'march');
// console.log(months);

//12. ENTRIES - The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// const a = ["a", "b", "c"];

// for (const [index, element] of a.entries()) {
//   console.log(index, element);
// }
//OUTPUT -
// // 0 'a'
// // 1 'b'
// // 2 'c'

//13. INCLUDES - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// let num =[1,2,3,4];
// console.log(num.includes(2)); //OUTPUT - True

//14. JOIN - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// SYNTAX - join(separator)

// let elements = ['water','air','fire','land'];
// console.log(elements.join('-')); //OUTPUT - water-air-fire-land

//15. KEYS - The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }

// Expected output: 0
// Expected output: 1
// Expected output: 2

//16. UNSHIFT METHOD - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// let num = [1,2,3,4];
// console.log(num.unshift(5,6)); //OUTPUT - 6

//17. SHIFT METHOD - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

// let num = [1,2,3,4];
// console.log(num.shift(2)); //OUTPUT - 1

