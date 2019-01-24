// Get User name in valid emailAdreess
function getUserName(emailAddress) {
	let emailPaths = emailAddress.toLowerCase().split("@");
	return emailPaths[0];
}

function getDomain(emailAddress) {
	let emailPaths = emailAddress.toLowerCase().split("@");
	return emailPaths[1];
}

function showAllCharacter(string) {
    string.split("").forEach(character => {
      console.log(character);
    })
}