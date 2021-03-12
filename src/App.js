import React,{Component} from 'react';
import {Increment,Decrement} from './Action/Action'
import {connect} from 'react-redux';
import Components from './Components';
import './Assets/index.css'
import Routers from './Components/Router/router'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const mapStateToProps = (props) =>{
	return {
		inc : props.increment,
		dec : props.decrement,
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		increment : ()=> dispatch(Increment()),
		decrement : ()=> dispatch(Decrement()),
	}
}



class App extends Component {
	render(){
		const options = {
			timeout: 5000,
			position: positions.BOTTOM_CENTER
		  };
	  return (
		<div className="App">
			<Provider template={AlertTemplate} {...options}>
				<Components />
		 		<Routers />
  			</Provider>
		 
		</div>
	  );
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
