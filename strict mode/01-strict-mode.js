'use strict'

function log(text, a) {
    eval(text);
    console.log(a, b);
}

var b = 3;

log('var b=2;', 3);


/**
 Conclusion
 eval is powerful — arguably too powerful. ES5’s strict mode blunts eval‘s sharpest corners to simplify
 it and permit typical optimizations in code using it.
 But while strict mode eval is better than regular eval,
 Function is still the best way to generate code at runtime.
 If you must use eval, consider using strict mode eval for a simpler binding model and eventual performance benefits.
 */