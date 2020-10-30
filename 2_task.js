let x ;
switch (typeof x) {
    case 'number' :
        console.log('x is a number');
        break;
    case 'string' :
        console.log('x is a string');
        break;
    case 'boolean' :
        console.log('x is a boolean');
        break;
    default:
        console.log('Type x is not defined');
}
