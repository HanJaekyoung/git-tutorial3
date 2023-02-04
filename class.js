'use strict';
//Objecct-orinedted programming
//class: template
//object: instance of a class
//Javascript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

//1. Class declarations
class person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const han = new person('han', 25);
console.log(han.name);
console.log(han.age);
han.speak();

//2.Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        //if  (value < 0){
        //   throw Error('age can not be negative');
        //}
        this._age = value < 0 ? 0: value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

//3.Fields (public, private)
//Too soon!
//https://deveploer.mozilla.org/en-US/docs/web/JavaScript/Refer
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4.Static properties and methods
//Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5.Inheritance
//a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color~`);
    }

    getArea(){
        return  this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){
        return (this.width* this.height) / 2
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }
}       

const rectangle = new Rectangle(20 , 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking: instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

function calculate(command, a, b){
    switch (command){
        case 'add':
             return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a/ b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('Unknown command');
    }
}
console.log(calculate('substract', 10, 3));
