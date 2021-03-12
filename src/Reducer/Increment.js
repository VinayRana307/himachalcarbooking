const Increment = (state=20,action) => {
	switch(action.type){
		case 'INCREMENT':
		 return state+1;
		 
		 
		 default :
			return state;
	}
}

export default Increment;