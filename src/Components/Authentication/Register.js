import React,{Component} from 'react';
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input} from 'reactstrap';
import { Button} from 'react-bootstrap';
import { isEmail, isEmpty,isNumber } from '../../FormValidation/validator';
import { useAlert } from "react-alert";
import FacebookLogin from 'react-facebook-login';
import Modal from "react-responsive-modal";
import GoogleLogin from 'react-google-login';

class UserRegister extends Component{
    constructor(){
        super();
        this.state = {
            formData : {},
            errors : []
        }
    }
    handleInputChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        let {formData} = this.state;

        formData[name] = value;

        this.setState({
            formData : formData
        })
    }
    handleSumbit = (data) =>{
        const {formData} =  this.state;
        const SocialAuthenticate = data.profileObj;
        let error = [];
		if(formData){
			this.setState({ errors : error})
		}
		if(isEmpty(formData.name)){
			error.name = "Type Your Name"
		}
		if(isEmpty(formData.email)){
			error.email = "Type Your Email"
		}
		else if (!isEmail(formData.email)) {
			error.email = "Enter a valid email";
		}
		if(isEmpty(formData.password)){
			error.password = "Type your Password"
		}
		if(isEmpty(error) || SocialAuthenticate){

			fetch('http://localhost:4000/api/create',{
				method:'POST',
				headers : {
					'content-Type' : 'application/json',
					'accept' : 'application/json'
				},
				body: JSON.stringify({
					
				  name: formData.name || SocialAuthenticate.name,
				  email: formData.email || SocialAuthenticate.email,
				  password: formData.password || '12345'
				})
			})
			.then(res=>{
				return res.json();
			})
			.then(data=>{
				console.log(data)
                
				const user = data;
				if(user.status === "success"){
					window.location.href = "/Himachal"
				}
			})
		}else{
			alert('Fill all the inputs')
		}
    }
    render(){
        const {errors} = this.state;
        
        const responseFacebook = (response) => {
			console.log(response)
			this.SocialMediaData(response);
			
		}
		const responseGoogle = (response) => {
            console.log(response)
				this.handleSumbit(response);
		}
        return(
            <div className="loginBackgroundColor">
                <strong className="Home_Link"><a href="/login">Login</a><a href="/Himachal">Home</a></strong>
                <div className='Login_Form'>
                    <div className='Login_Container'>
                        <Row className='col-sm-12'>
                            <Col>
                                <Card>
                                    <div className="Card_Inner_div">
                                    <CardTitle className="cardTitle">Signup User</CardTitle>
                                        <FormGroup className="formGroup">
                                            <Label className="from_Label">Name :   </Label>
                                            <Input
                                                name='name'
                                                type='text'
                                                autocomplete="false"
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.name?<p className="validationError">{errors.name}</p>:null}
                                        </FormGroup>
                                        <FormGroup  className="formGroup">
                                            <Label className="from_Label">Email :   </Label>
                                            <Input
                                                name='email'
                                                type='text'
                                                autoComplete="off"
                                                placeholder='example123@gmail.com'
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.email?<p className="validationError">{errors.email}</p>:null}
                                        </FormGroup>
                                        <FormGroup className="formGroup">
                                            <Label className="from_Label">Password :   </Label>
                                            <Input
                                                name='password'
                                                type="password"
                                                autoComplete="false"
                                                onChange={this.handleInputChange}
                                            />
                                            {errors.password?<p className="validationError">{errors.password}</p>:null}
                                        </FormGroup>
                                        <FormGroup style={{textAlign:'center'}}>
                                            <Button className="Sumbitbutton" onClick={this.handleSumbit}>Submit</Button>
                                        </FormGroup>
                                        <FormGroup className="col-md-12">
                                            <GoogleLogin
                                                clientId="202023482665-qqdm2k87tvncnhokn7cbgcecn2rn9rlj.apps.googleusercontent.com"
                                                buttonText="Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                                className="googleAlignment"
                                                />
                                            </FormGroup>
                                            <FormGroup className="col-md-12">
                                                <FacebookLogin
                                                    appId="1381293252057641" //APP ID NOT CREATED YET
                                                    fields="name,email"
                                                    callback={responseFacebook} style={{ padding: '7px' }}
                                                />
                                            </FormGroup>
                                            
                                    </div>        
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>  
        )
    }
}

export default UserRegister;