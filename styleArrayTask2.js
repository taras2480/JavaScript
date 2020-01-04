"use strict"

function show(array) {

	console.log(array)

}
function devide() {

	console.log('------------------');

}

let style = [ 'Джаз', 'Блюз' ];
show(style);
devide()

console.log('Додаємо Рок-н-Рол')
style.push('Рок-н-Ролл');
show(style);
devide();

console.log('Міняємо передостаннє значення на Класика')
style.splice(-2, 1, 'Класика');
show(style);
devide();

console.log('Видаляємо перше значення');
console.log('Видалене значення: ' + style.shift());
show(style);
devide();

console.log('Додаємо в початок значення «Реп» і «Реггі»');
style.unshift('Реп', 'Реггі');
show(style);
devide();

console.log('Функція find');

find(style, 'Реггі');
