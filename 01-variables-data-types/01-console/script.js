// this is a single line of code

console.log(200);
console.log('Hellow World')
console.log(10, 'Hello', true)

const x = 100;
console.log(x)

console.group('simple');
console.table( {name: 'Brad', email: 'brad@gmail.com'} );
console.log(x);
console.error('Alert');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);
