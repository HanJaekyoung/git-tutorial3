//Nullish coalescing operator
//Bad Code
function printMessage(text){
    let message = text;
    if (text ===null || text === undefined){
        message = 'Nothing to display 😜';
    }
    console.log(message);
}
printMessage('angry');

//Defalut parameter is only for undefined
function printMessage(text = 'Nothing to display '){
    console.log(text);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);
console.clear();
//Logical OR operator ||
function printMessage(text){
    const message = text || 'Nothing to display😜';
    console.log(message);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);
printMessage(0);
printMessage('');

//Object Destrcturing
const person = {
    name: 'Zead',
    age: 'shadow',
    phone: '010 88888888',
};
//Bad Code
function displayPerson(person){
    displayAvator(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

//Bad Code
function displayPerson(person){
    const name = person.name;
    const age = person.age;
    displayAvator(name);
    displayName(name);
    displayProfile(name, age);    
}

//Good Code
function displayPerson(person){
    const{name, age} = person;
    displayAvator(name);
    displayName(name);
    displayProfile(name, age);
}

//Spread Syntax - Object
const item = {type: '🧥', size: 'M'};
const detail = {price: 20, made: 'Korea', gender: 'M'};

//Bad Code
item['price']  = detail.price;

//Bad Code
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
};

//Good Code
const shirt0 = Object.assign(item, detail);

//Better Code
const shirt = {...item, ...detail, price: 40};

//Spread Syntax - Array
let fruits = ['🍉', '🥭', '🍑'];

fruits.push('🍓');
fruits = [...fruits, '🍓'];




