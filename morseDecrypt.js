/*
	Write a function that will encrypt a given 

	sentence into International Morse Code, 

	both the input and out puts will be strings.

	Characters should be separated by a single 

	space. 

	Words should be separated by a triple space.

	For example, "HELLO WORLD" should return -> 

	".... . .-.. .-.. --- .-- --- .-. .-.. -.."

	To find out more about Morse Code follow this 

	link: https://en.wikipedia.org/wiki/Morse_code

	A preloaded object/dictionary/hash called 

	CHAR_TO_MORSE will be provided to help convert 

	characters to Morse Code.
*/
var CHAR_TO_MORSE = {
	'0': '-----',
	'1': '.----',
	'2': '..---',
	'3': '...--',
	'4': '....-',
	'5': '.....',
	'6': '-....',
	'7': '--...',
	'8': '---..',
	'9': '----.',
	a: '.-',
	h: '....',
	o: '---',
	u: '..-',
	b: '-...',
	i: '..',
	p: '.--.',
	v: '...-',
	c: '-.-.',
	j: '.---',
	q: '--.-',
	w: '.--',
	d: '-..',
	k: '-.-',
	r: '.-.',
	x: '-..-',
	e: '.',
	l: '.-..',
	s: '...',
	y: '-.--',
	f: '..-.',
	m: '--',
	t: '-',
	z: '--..',
	g: '--.',
	n: '-.',
	A: '.-',
	H: '....',
	O: '---',
	U: '..-',
	B: '-...',
	I: '..',
	P: '.--.',
	V: '...-',
	C: '-.-.',
	J: '.---',
	Q: '--.-',
	W: '.--',
	D: '-..',
	K: '-.-',
	R: '.-.',
	X: '-..-',
	E: '.',
	L: '.-..',
	S: '...',
	Y: '-.--',
	F: '..-.',
	M: '--',
	T: '-',
	Z: '--..',
	G: '--.',
	N: '-.' 
}

decodeMorse = function(morseCode){
	//decodeMorse('.... . -.--   .--- ..- -.. .') -> 
	//should return "HEY JUDE"

	var MORSE_TO_CHAR = {};
	for (key in CHAR_TO_MORSE) {
			MORSE_TO_CHAR[ CHAR_TO_MORSE[key] ]= key;
	}

	var result = [];

	morseCode = morseCode.split("   ");
	morseCode.forEach(function(e,i,a){
		var str = [];
		var word = e.split(" ");
		word.forEach(function(el,idx,arr){
			str.push(MORSE_TO_CHAR[el]);
		});
		result.push(str.join("") + " ");
	});
	return result.join("").trim();
	
}

function encryption(message) {
  //YourCodeHere
  //CHAR_TO_MORSE preloaded to convert characters into Morse code
  var result = [];
  message = message.split("");
  message.forEach(function(e,i,a){
  	if(e === " ") result.push(" " + " " );
  	else result.push(CHAR_TO_MORSE[e] +  " ");
  });
  return result.join("").trim();
}

(function main(){
	console.log("HELLO WORLD", " -> ");
	console.log( encryption("HELLO WORLD") );
	console.log(".... . -.--   .--- ..- -.. .", " -> ");
	console.log( decodeMorse(".... . -.--   .--- ..- -.. .") );
})();
