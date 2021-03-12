import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Login from '../Authentication/Login';
import UserRegister from '../Authentication/Register';

function Routers(){
    return(
        <div>
            <Router>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={UserRegister}/>
                <Route exact path="/Himachal" component={AppHeader}/>
            </Router>
        </div>
    )
}

export default Routers;
