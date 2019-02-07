"use strict";
let users = [
	{firstName: 'Максим', lastName: 'Рукавицын', age: 28},
	{firstName: 'Максим1', lastName: 'Рукавицын1', age: 29},
	{firstName: 'Максим2', age: 30},
	{firstName: 'Максим3', lastName: 'Рукавицын3', age: 31},
	{firstName: 'Максим4', lastName: 'Рукавицын4', age: 34},
	{lastName: 'Рукавицын5', firstName: 'Максим5', age: 54},
	{firstName: 'Максим6', lastName: 'Рукавицын6'},
	{firstName: 'Максим7', lastName: 'Рукавицын7', age: 88},
	{firstName: 'Максим8', lastName: 'Рукавицын8', age: 76}
];
let headersForTable = {firstName: 'имя', lastName: 'фамилия', age: 'возраст', kaka: 'rrrr'};


let table1 = new tableManager(document.body, headersForTable, users);
