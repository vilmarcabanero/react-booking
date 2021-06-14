import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

let person = {
	name: 'V',
	address: 'Munti',
	occupation: 'Dev',
	age: 25,
	expenses: 10000,
	income: 30000,
};

let ourClass = [
	{
		name: 'G',
		batch: '109',
	},
	{
		name: 'V',
		batch: '109',
	},
];

let accounts = [
	{
		name: 'Jeff Bezos',
		age: 60,
		income: 60000,
		expense: 30000,
	},
	{
		name: 'William Gates',
		age: 68,
		income: 50000,
		expense: 10000,
	},
	{
		name: 'Steve Jobs',
		age: 59,
		income: 40000,
		expense: 20000,
	},
	{
		name: 'Elon Musk',
		age: 42,
		income: 50000,
		expense: 15000,
	},
	{
		name: 'Pepito Manaloto',
		age: 43,
		income: 45000,
		expense: 10500,
	},
];

let myElement = accounts.map(account => {
	return (
		<div>
			<h3>Name: {account.name}</h3>
			<p>Age: {account.age}</p>
			<p>Income: {account.income}</p>
			<p>Expense: {account.expense}</p>
			<p>Balance: {account.income - account.expense}</p>
		</div>
	);
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	// myElement,
	document.getElementById('root')
);
