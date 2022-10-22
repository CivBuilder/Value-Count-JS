/// Chris Catechis
/// 21 October 2022
/// This basic JS program counts how many times a value appears in an array

/// @param inputArray is the array we are searching through
/// @param value is the value we are searching for
/// @returns how many times value appears in the array
const count = (inputArray, value) => {
    const newArray = inputArray.filter(current => current === value);
    return newArray.length;
};

let fruitsInMyBackpack = ['banana', 'apple', 'banana', 'apple', 'kiwi', 'pineapple', 'orange', 'banana'];

let result = count(fruitsInMyBackpack, 'banana');
console.log(result);

result = count(fruitsInMyBackpack, 'apple');
console.log(result);

result = count(fruitsInMyBackpack, 'pineapple');
console.log(result);