var text = "𠮷";

console.log(text.length);           // 2
console.log(text.charAt(0));        // ""
console.log(text.charAt(1));        // ""
console.log(text.charCodeAt(0));    // 55362 codePointAt(0) -> cały kod
console.log(text.charCodeAt(1));    // 57271

console.log(String.fromCodePoint(134071));  // "𠮷"


function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}

console.log(text.codePointAt(0));   // 134071
console.log(codePointLength("abc"));    // 3
console.log(codePointLength("𠮷bc"));   // 3

----------------
let message1 = `Multiline\nstring`,
    message2 = String.raw`Multiline\nstring`;

console.log(message1);          // "Multiline
                                //  string"
console.log(message2);          // "Multiline\\nstring"
----------------

var str = "Karol ma karty";
var n = str.search(/kar/i); 
console.log(n);					//0



