const camelCase = require('camelcase');

console.log("\n camelcase - zamienia tekst na pisany sposobem camelCase\n Przykłady:");

console.log('foo-bar: ');
console.log(camelCase('foo-bar'));
console.log('\n');

console.log('foo_bar: ');
console.log(camelCase('foo_bar'));
console.log('\n');

console.log('Foo-Bar: ');
console.log(camelCase('Foo-Bar '));
console.log('\n');

console.log('--foo.bar: ');
console.log(camelCase('--foo.bar'));
console.log('\n');