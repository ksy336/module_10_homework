let arr = [1, 3, 6, 5, 0, '1', null, undefined, NaN, true, false];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         console.log (arr[i]);
//     } else if (arr[i] == 0){
//         console.log (0);
//     }
// };

// Задание выполнено неверно, количество четных, нечетных элементов и нулей не подсчитывается. Ниже написала верный вариант решения

let even = 0, odd = 0, zero = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (arr[i] === 0) {
            zero++;
        } else if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}

console.log(`Четных элементов: ${even}`);
console.log(`Нечетных элементов: ${odd}`);
console.log(`Нулей: ${zero}`);