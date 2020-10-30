let arr = [1, 3, 6, 5, 0, '1'];

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        console.log (arr[i]);
    } else if (arr[i] == 0){
        console.log (0);
    }
};