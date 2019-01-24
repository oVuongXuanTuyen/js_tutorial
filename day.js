// Returns the day name of given date.
function dayName(date) {
	const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[date.getDay()]; 
}

// Return a greeting for the given date
function greeting(date) {
	return `Hello world! Happy ${dayName(date)}`;
}