// 1.Use strict
//added in ES 5
//use this for Valina JavaScript.
'use strict';

//2.Variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'npb';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//3. Constant, r(read only)

const daysInWeek = 7;
const maxNumber = 5;
//Note!
//Immutable data type: premitive types, frozen objects (i.e. object.freeze())
//Mutable data type: all objects by default are mutable in JS
//favor immutable data type always for a few reasons;
//-Security
//-thread human mistakes
//-reduce human mistakes

//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, bos container
//function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

//number - specla numeric values: infinity, -infinity, NaN
const infinity = -1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number'/ 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigint (fairly new, don't use it yet)
const bigint = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2*53)
console.log(`value: ${bigint}, type: ${typeof bigint}`);
Number.MAX_SAFE_INTEGER;

//string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, unedifined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

//object, real-life object, data structure
const han = {name:'han', age:25};
han.age = 22;

//5.Dynamic typing: dynamically typed lanaguage
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 6;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/ '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));


