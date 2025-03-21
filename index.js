// 1. Поиск и обрезка массива
// Описание:
// Напишите функцию findAndSlice(arr, value), которая принимает массив arr и
// значение value.
// Функция должна найти индекс первого вхождения value в массиве и вернуть новый
// массив, в котором остаются элементы только после найденного значения
// (включительно). Если значение value не найдено, возвращается пустой массив.
// Пример:
// javascript
// CopyEdit
// findAndSlice([1, 2, 3, 4, 5], 3); // [3, 4, 5]
// findAndSlice(['a', 'b', 'c'], 'b'); // ['b', 'c']
// findAndSlice([10, 20, 30], 50); // []

// function findAndSlice(arr, value) {
//   let index = arr.indexOf(value);
//   return index !== -1 ? arr.slice(index) : [];
// }

// console.log(findAndSlice([1, 2, 3, 4, 5], 3));
// console.log(findAndSlice(["a", "b", "c"], "b"));
// console.log(findAndSlice([1, 2, 3], 5));

// ------------------------------------------------------------------------- //

// 2. Удаление элементов из массива
// Описание:
// Напишите функцию removeItems(arr, startIndex, deleteCount), которая
// принимает массив arr, индекс startIndex и количество элементов для удаления
// deleteCount.
// Функция должна удалить элементы из массива начиная с индекса startIndex и
// вернуть новый массив.
// Пример:
// javascript
// CopyEdit
// removeItems([1, 2, 3, 4, 5], 2, 2); // [1, 2, 5]
// removeItems(['apple', 'banana', 'cherry'], 1, 1); // ['apple',
// 'cherry']
// removeItems([10, 20, 30], 0, 3); // []

// function removeItems(arr, startIndex, deleteCount) {
//   let newArr = arr.slice();

//   newArr.splice(startIndex, deleteCount);

//   return newArr;
// }

// console.log(removeItems([1, 2, 3, 4, 5], 2, 2));
// console.log(removeItems(["car", "bus", "minibus"], 1, 1));
// console.log(removeItems([10, 20, 30], 0, 3));

// ------------------------------------------------------------------------- //

// 3. Объединение массивов без дубликатов
// Описание:
// Напишите функцию mergeUnique(arr1, arr2), которая принимает два массива и
// возвращает новый массив, содержащий все уникальные элементы из обоих массивов.
// Пример:
// javascript
// CopyEdit
// mergeUnique([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
// mergeUnique(['a', 'b'], ['b', 'c', 'd']); // ['a', 'b', 'c', 'd']
// mergeUnique([], [1, 2]); // [1, 2]

// function mergeUnique(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

// console.log(mergeUnique([1, 2, 3], [3, 4, 5]));
// console.log(mergeUnique(["a", "b"], ["b", "c", "d"]));
// console.log(mergeUnique([], [1, 2]));

// ------------------------------------------------------------------------- //

// 4. Перестановка элементов массива
// Описание:
// Напишите функцию swapElements(arr, index1, index2), которая принимает
// массив arr и два индекса index1 и index2. Функция должна поменять местами
// элементы по этим индексам. Верните новый массив.
// Пример:
// javascript
// CopyEdit
// swapElements([1, 2, 3, 4], 1, 3); // [1, 4, 3, 2]
// swapElements(['a', 'b', 'c'], 0, 2); // ['c', 'b', 'a']
// swapElements([10, 20, 30], 1, 1); // [10, 20, 30]

// function swapElements(arr, index1, index2) {
//   let newArr = arr.slice();

//   let temp = newArr[index1];
//   newArr[index1] = newArr[index2];
//   newArr[index2] = temp;

//   return newArr;
// }

// console.log(swapElements([1, 2, 3, 4], 1, 3));
// console.log(swapElements(["a", "b", "c"], 0, 2));
// console.log(swapElements([10, 20, 30], 1, 1));

// ------------------------------------------------------------------------- //

// 5. Разделение массива на подмассивы
// Описание:
// Напишите функцию splitArray(arr, size), которая принимает массив arr и
// число size. Функция должна разделить массив на подмассивы длиной size.
// Последний подмассив может быть меньше, если элементов не хватает.

// ❌ //

// ------------------------------------------------------------------------- //

// 6. Очередь с использованием push и shift
// Описание:
// Напишите функцию queueOperations(arr, element), которая реализует очередь с
// помощью методов push и shift. Функция должна добавлять элемент в конец массива
// с помощью push, а затем удалять первый элемент с помощью shift. Верните
// изменённый массив.
// Пример:
// javascript
// CopyEdit
// queueOperations([1, 2, 3], 4); // [2, 3, 4]
// queueOperations(['apple', 'banana'], 'cherry'); // ['banana',
// 'cherry']
// queueOperations([10], 20); // [20]

// function queueOperations(arr, element) {
//   arr.push(element);

//   arr = arr.slice(1);

//   return arr;
// }

// console.log(queueOperations([1, 2, 3], 4));
// console.log(queueOperations(["apple", "banana"], "cherry"));
// console.log(queueOperations([10], 20));

// ------------------------------------------------------------------------- //

// 7. Реверс массива с использованием push и pop
// Описание:
// Напишите функцию reverseArray(arr), которая переворачивает массив с
// использованием методов push и pop. Функция должна последовательно извлекать
// элементы из исходного массива с помощью pop и добавлять их в новый массив с
// помощью push.
// Пример:
// javascript
// CopyEdit
// reverseArray([1, 2, 3, 4]); // [4, 3, 2, 1]
// reverseArray(['a', 'b', 'c']); // ['c', 'b', 'a']
// reverseArray([10, 20, 30, 40]); // [40, 30, 20, 10]

// function reverseArray(arr) {
//   let reversedArr = [];

//   while (arr.length > 0) {
//     reversedArr.push(arr.pop());
//   }

//   return reversedArr;
// }

// console.log(reverseArray([1, 2, 3, 4]));
// console.log(reverseArray(["a", "b", "c"]));
// console.log(reverseArray([10, 20, 30, 40]));
