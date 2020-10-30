let myMap = new Map();
myMap.set('green', 'pen');
myMap.set('red', 'shoes');
myMap.set(true, false);

for (let name of myMap.keys()){
    console.log('значение ключа', name);
}
for (let name of myMap.values()){
    console.log('значение свойства', name);
}