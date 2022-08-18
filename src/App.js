import React, { Component } from 'react';
import './App.css';
import AddNewData from './AddNewData';
// import { data } from './data';
import PlaceHolder from './PlaceHolder';
import Navigation from './Navigation';
// import { render } from '@testing-library/react';

class App extends Component {
	constructor(params) {
		super();
		this.state = {
			route: 'PlaceHolder',
			date: '',
			people: []
		}
	}
	
	componentDidMount() {
		this.getDate();
		fetch('http://localhost:3000/list')
			.then(response => response.json())
			.then(people => {
				this.setState({ people: people });
				// console.log(people);
			})
	}

	getDate = () => {
		var datesfull = new Date().toISOString().slice(0, 10);
		this.setState({ date: datesfull });

	}

	onRouteChange = (route) => {
		this.setState({ route: route });
	}

	resetDate = () => {
		var datesfull = new Date().toISOString().slice(0, 10);
		this.setState({ date: datesfull });
	}
	onDateChange = (event) => {
		this.setState({ date: event.target.value });
		this.setState({ input: event.target.value });
	}


	render() {

		const { people, route, date } = this.state;
		// console.log(date);
		// const people = data;

		let filterPeople = people.filter(people => {
			let newDate1 = new Date(people.dob);
			newDate1.toISOString().slice(0, 10);
			let date1 = newDate1.getDate();
			let month1 = newDate1.getMonth();

			// console.log("newDate1:" + newDate1);
			// console.log("date1:" + date1);
			// console.log("month1:" + month1);

			let newDate2 = new Date(date);
			let date2 = newDate2.getDate();
			let month2 = newDate2.getMonth();

			// console.log("newDate2:" + date);
			// console.log("date2:" + date2);
			// console.log("month2:" + month2);

			return date1 === date2 && month1 === month2
		});

		// console.log(filterPeople);


		return (
			<div className="vh-100">
				{
					route === 'PlaceHolder'
						?
						<div>
							<Navigation onRouteChange={this.onRouteChange} date={date} onDateChange={this.onDateChange} />
							{/* {date} */}
							<div className="center appmain">
								<PlaceHolder resetDate={this.resetDate} dateSelect={date} filterPeople={filterPeople} />
							</div>
						</div>
						: <AddNewData className="appmain center" onRouteChange={this.onRouteChange} />
				}
			</div>
		)
	}
}
export default App;
