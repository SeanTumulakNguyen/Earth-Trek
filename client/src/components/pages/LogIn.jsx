import React, { Component } from 'react';
import SubmitBtn from '../SubmitBtn/SubmitBtn'

class LogIn extends Component {
	state = {
		username: '',
		password: ''
	}
	
	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
		console.log(this.state)
	}

	handleSubmit = (event) => {
		event.preventDefault();
	}
	render() {
		return (
			<form className="container mt-4">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter Username" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
				</div>
				<SubmitBtn type="success" onClick={this.handleSubmit} />
			</form>
		);
	}
}

export default LogIn;
