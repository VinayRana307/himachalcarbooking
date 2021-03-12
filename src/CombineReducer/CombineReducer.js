import Increment from '../Reducer/Increment';
import Decrement from '../Reducer/Decrement';
import {combineReducers} from 'redux';


const CombineReducers = combineReducers({
	increment : Increment,
	decrement : Decrement
})

export default CombineReducers;