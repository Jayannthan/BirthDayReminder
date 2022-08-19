
import React, { Component } from "react";


class AddNewData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			dob: "",
			comments: ""
		}
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value })
		console.log(this.state);

	}

	onDOBChange = (event) => {
		this.setState({ dob: new Date(event.target.value).toISOString().slice(0, 10) + "T00:00:00.000Z" })
		console.log(this.state);
	}

	onCommentsChange = (event) => {
		this.setState({ comments: event.target.value })
		console.log(this.state);

	}

	onAddClick = () => {
		console.log(this.state)
		// console.log(JSON.stringify
		// 	({
		// 		name: this.state.name,
		// 		dob: this.state.dob,
		// 		comments: this.state.comments
		// 	}))

		// fetch('https://secret-tor-05434.herokuapp.com/register', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		name: this.state.name,
		// 		dob: this.state.dob,
		// 		comments: this.state.comments
		// 	})
		// })
		// 	.then(response => console.log(response.json()))
		// 	.catch(err => {
		// 		console.log(err);
		// 	})

		fetch("http://secret-tor-05434.herokuapp.com/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: this.state.name,
				dob: this.state.dob,
				comments: this.state.comments
			})
		})
			// .then((response) => console.log(response.status))
			.catch((err) => {
				console.log(err);
			});
		// .then(people => {
		// 	if (people) {
		// 		this.props.loadUser(people)
		// 		// this.props.onRouteChange('PlaceHolder');
		// 	}
		// })
	}

	render() {
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<article className="pa3 black-80">
					<form className="measure center">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="b f2 tc fw6 ph0 mh0">Enter Details</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" for="name">Name</label>
								<input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" for="dob">DOB</label>
								<input onChange={this.onDOBChange} className=" pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="date" name="dob" id="dob" />
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" for="name">About</label>
								<input onChange={this.onCommentsChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="comments" id="comments" />
							</div>
						</fieldset>
						<div class="ph3 w-100 center">
							<input onClick={this.onAddClick} className="b ph3 tc pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add" />
							<input onClick={() => this.props.onRouteChange('PlaceHolder')} className="fr b ph3 tc pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Back" />
						</div>
					</form>
				</article>
			</article>
		)
	}
}

export default AddNewData;