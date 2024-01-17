function firstNonRepeatedChar(str) {
 // Write your code here
	let freqobj={};
	for(let char in str){
		if(freqobj[char]){
			freqobj[char]++;
		}
		else{
			freq[char]=1;
			
		}
	}
	console.log(freqobj);

	
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
