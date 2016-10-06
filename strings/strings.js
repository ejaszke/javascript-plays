var text = "𠮷";

console.log(text.length);           
console.log(text.charAt(0));        
console.log(text.charAt(1));        
console.log(text.charCodeAt(0));    
console.log(text.charCodeAt(1));    

console.log(String.fromCodePoint(134071));  

function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);  //u for unicode characters
    return result ? result.length : 0;
}

console.log(text.codePointAt(0));
console.log(codePointLength("abc"));    
console.log(codePointLength("𠮷bc"));  

// ----------------
let message1 = `Multiline\nstring`,
    message2 = String.raw`Multiline\nstring`;

console.log(message1);          
console.log(message2);  
      
// ----------------

var str = "Karol ma karty";
var n = str.search(/kar/i); 
console.log(n);

//What are the results of all console.log ?

