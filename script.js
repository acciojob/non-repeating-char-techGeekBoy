function firstNonRepeatedChar(str) {
 let charcount = {};
	for(let x of str){
		if(charcount[x]){
			charcount[x]++;
		}
		else{
			charcount[x]=1;
			return x;
		}
	}
		return null;
	}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
