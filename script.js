function firstNonRepeatedChar(str) {
 // Write your code here
	let freqobj={};
	for(let char in str){
		freqobj[char]=1;
		return  char;
	
	}
		return null;
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
