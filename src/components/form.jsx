import React from "react";
import { Input } from "atomize";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);

		function handleChange(event) {
			this.setState({value: event.target.value});
		}

		function handleSubmit(event) {
			alert('A name was submitted: ' + this.state.value);
			event.preventDefault();
		}

		function render() {
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<Input placeholder="Basic Input" />
				</label>
				<label>
					Age:
					<Input placeholder="Basic Input" />
				</label>
				<label>
					Email:
					<Input placeholder="Basic Input" />
				</label>
				<label>
					Phone number:
					<Input placeholder="Basic Input" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		}
	}
}
