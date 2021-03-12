const Increment = () => {
	return ({
		type : 'INCREMENT',
		payload : 1	
	})
}

const Decrement = () => {
	return ({
		type : 'DECREMENT',
		payload : 1	
	})
}

export {Increment ,Decrement} ;