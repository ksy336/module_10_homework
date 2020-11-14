let myMap = new Map();
myMap.set('green', 'pen');
myMap.set('red', 'shoes');
myMap.set(true, false);

for (let key of myMap.keys()){
    console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}

// Не совсем верно, т.к. по условию нужно было вывести элементы Map в виде ключ-значение. Сейчас ключи и значения выводятся отдельно, и сложно понять, какой ключ к какому значению относится. Выше исправила