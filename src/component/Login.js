import React, {Component} from "react";
import {Form , FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';
import PasswordChecklist from "react-password-checklist";
import { connect} from 'react-redux';
import { setDetails} from '../actions';

class Login extends Component{
	constructor(){
		super();
		this.state = {
		  name: "",
		  profileImage: "",
		  password: ""
		}
	  }
	  Login(){
		let {name, profileImage} = this.state;
		const url = `https://randomuser.me/api/?i=${name}&q=${profileImage}`;
		
		fetch(url, {
		  method:'GET'
		}).then(response => response.json())
		.then(json => 
			{
				this.props.setDetails(json.results)
			});
	  }
	  
	  render() {
		return (
			<div className="col-md-6 col-md-offset-3">
				<h2>Login</h2>
				<Form>
					<FormGroup>
						<FormLabel>Profile Image:</FormLabel>
						<FormControl 
							type="file"
							onChange ={ event => this.setState({profileImage : event.target.files[0]})}
							/>
					</FormGroup>

					<FormGroup>
						<FormLabel>Name:</FormLabel>
						<FormControl 
							type="text" 
							placeholder="name"
							onChange = {event => this.setState({name : event.target.value})}
							/>
					</FormGroup>

					<FormGroup>
						<FormLabel>User Name:</FormLabel>
						<FormControl type="text" placeholder="user name"/>
					</FormGroup>

					<FormGroup>
						<FormLabel>Password:</FormLabel>
						<FormControl 
							type="password" 
							placeholder="password"
							onChange={e => this.setState({password:e.target.value})}
						/>
						<PasswordChecklist
							rules={["length","specialChar","number","capital"]}
							minLength={8}
							value={this.state.password}
							onChange={(isValid) => {}}
						/>
					</FormGroup>
					
					<Button onClick = {() => this.Login()}>Submit</Button>
				</Form>
			</div>
		);
	  }	
}
export default connect(null, {setDetails})(Login);