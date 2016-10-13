function log(text, a) {
    eval(text);
    console.log(a, b);
}

var b = 3;

log('var b=2;', 3);
