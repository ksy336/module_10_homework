let input = prompt('Enter a number');
input = + input;
if (isNaN(num) && input == null) {
    console.log ('Oops, you have made mistake. Please, try again.');

}
typeof input == 'number';
if (input % 2 == 0) {
    console.log ('It is even number');
}
else  {
    console.log ('It is an odd number');
}
