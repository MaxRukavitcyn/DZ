'use strict';
//области видимости
//ES5 функциональная область
function foo() {
	var some = 'greeting';
	
	if (true) {
		var x = 99;
	}
	for (var i = 0; i < 9; i++) {
		console.log(i);
	}
	console.log(i); //9
}
// console.log(some); //ошибка some is not defined

//ES6 блочная область видимость
function bar() {
	if (true) {
		let y = 99;
	}
	// console.log(y); //y is not defined
	for (let i = 0; i < 9; i++) {
		// console.log(i);
	}
	// console.log(i); //i is not defined
	const c = 'постойнная';
	c = 'asdasdasd'; //Assignment to constant variable
}

//объявление циклов
//ES5
function bazz() {
	var arr = [1,2,3,5];
	for(var i=0;i<arr.length;i++) {
		///
	}
}
//ES6
//определение параметров по умлочанию
function bazz1(arr = [1,2,3,5,6,7]) {
	for(let a of arr) {
		console.log(a);
	}
	const obj = {a:1,b:2,c:3};
	for(let i in obj) {
		console.log(i)
	}
}
//стрелочный функции(лямбды)
//ES6
let lambda = () => {console.log('lambda')};

//объекты
//ES5
function foo1() {
	var user = {
		name: 'Maxim',
		age: 28,
		sayHello: function(){
			alert('Hello Alex');
		}
	}
}

//ES6
//вычисляемые свойства объекта
let foo11 = () =>{
	let name = 'Maxim ';
	let lastName = 'Rukavitsyn ';
	let prop = 'fullName';
	
	let user = {
		[prop]: `${name + lastName}`,
		age: 28,
		sayHello(){
			alert('hello Alex')
		}
	};
	user.sayHello()
	console.log(user.fullName)
};
//ES6 Object.assign()
function bazzz() {
	let user1 = {
		name1: 'Max'
	};
	let user2 = {
		name2: 'Alex'
	};
	console.log(Object.assign({}, user1, user2)); //объединяет два объекта в один
}

//ES5
function bzzz(){
	for(var i=0; i<arguments.length; i++) {
		// console.log(arguments[i]);
	}
	arguments[0]=2;
	console.log(arguments[1])
	
}
//ES6 rest параметр
function bzzz1(...arr) {
	arr[0] = 1;
	console.log(arr[0], arr[2]);
}
//расширения в функциях вызова
//ES5
function frr() {
	function frr1(a,s,z) {
		console.log(a,s,z);
	}
	var arr = [1,2];
	frr1.apply(null, arr.concat(5));
}
//ES6
function frrr() {
	let frr1 = (a,s,z) => {
		console.log(a,s,z);
	};
	let arr = [1,2];
	frr1(...arr, 5);
}

//деструктуризация
function fzzzz() {
	let arr = ['Maxim', 'Rukavitsin'];
	let [name, lastName] = arr;
	console.log(name , lastName)
}
//Symbol для создания уникальных идентификаторов, не участвуют в итерации
function fsss() {
	let isAdmin = Symbol.for("isAdmin");
	let user = {
		name: "Вася",
		age: 30,
		[isAdmin]: true
	};

// в цикле for..in также не будет символа
	alert( Object.keys(user) ); // name, age

// доступ к свойству через глобальный символ — работает
	alert( user[isAdmin] );
}

//классы наследование и создание объектов в ES6
class Vehicle1 {
	constructor(color){
		this.color = color;
		
	}
	drive(){
		console.log('tra...ta..ta')
	}
}
class Car extends Vehicle1 {
	constructor(model, color){
		super(color);
		this.model = model;
	}
	drive(){
		console.log('zhuh...zhuh...')
	}
}

const vehicle1 = new Vehicle1('vehicle', 'black');
console.log(vehicle1.model, vehicle1.color);
vehicle1.drive();
const car = new Car('VAZ2101', 'red');
console.log(car.model, car.color);
car.drive();





































