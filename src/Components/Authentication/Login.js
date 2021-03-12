import React,{Component} from 'react';
import { Row, Col, Card, CardBody, CardTitle, FormGroup, Label, Input } from 'reactstrap';
import { Button} from 'react-bootstrap';
class Login extends Component{
    render(){
        return(
            <div className="loginBackgroundColor">
                <strong className="Home_Link"><a href="/signup">Register</a></strong><strong className="Home_Link"><a href="/Himachal">Home</a></strong>
                <div className='Login_Form'>
                    <div className='Login_Container'>
                        <Row className='col-sm-12'>
                            <Col>
                                <Card>
                                    <div className="Card_Inner_div">
                                        <CardTitle className="cardTitle">Login User</CardTitle>
                                        <FormGroup className="formGroup">
                                            <Label className="from_Label">Email :   </Label>
                                            <Input
                                                name='email'
                                                type='text'
                                                placeholder='example123@gmail.com'
                                            />
                                        </FormGroup>
                                        <FormGroup className="formGroup">
                                            <Label className="from_Label">Password :   </Label>
                                            <Input
                                                name='password'
                                                type="password"
                                            />
                                        </FormGroup>
                                        <FormGroup style={{textAlign:'center'}}>
                                            <Button className="Sumbitbutton">Submit</Button>
                                        </FormGroup>
                                        <FormGroup style={{textAlign:'center'}}>
                                            <strong><a href="">Forgot Password</a></strong>
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

export default Login;