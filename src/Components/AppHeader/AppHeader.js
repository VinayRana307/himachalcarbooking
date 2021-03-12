import React,{Component} from 'react';
import Login from '../Authentication/Login';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class AppHeader extends Component{
    render(){
        return (
            <div className='Homepage_Header'>
                <div className='Homepage_innerHeader'>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                            <a href='Downloads'>Downloads</a>
                            <a href='About'>About</a>
                            <a href='Profile'>Profile</a>
                        </li>
                    </ul>
                    <div className='authentication_links'>
                        <ul>
                            <li>
                                <a href='login'>Login</a>
                                <a href='signup'>Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader;