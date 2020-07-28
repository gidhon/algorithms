function isPalindrome(string) {

	string = string.toLowerCase();

	const characters = string.split('');
	const validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let vettedChars = [];
	characters.forEach(character => {

	    if (validChars.indexOf(character) > -1) vettedChars.push(character);

	});

	return vettedChars.join('') === vettedChars.reverse().join('');
}

isPalindrome('Eva, can I see bees in a cave?');
