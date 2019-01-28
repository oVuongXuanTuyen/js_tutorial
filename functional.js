function getStatesURL(states) {
	return states.map( state => {
		return `https://example.com/${state.toLowerCase().split(" ").join("_")}.vn`;
	});
}

function productOf(array) {
	return array.reduce((product, element) => { return product *= element})
}

