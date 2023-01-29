//Q1.make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}
//Q2.make an array out of a String
{
    const fruits = '🍎,🥝,🍌,🍒';
    const result = fruits.split(',');
    console.log(result);        
}
//Q3.make this arrat look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse()
    console.log(result);
    console.log(array);
}

//Q4.make new array without the first two element
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}
//splice은 배열자체를 수정해주지만 slice는 배열에서 원하는 부분을 수정할수 있다.

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q5,find a student with the score 90
{
    const result = students.find((student) =>student.score === 90);
    console.log(result);
}

//Q6.make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
    //Q7.make an array containing only the students' scores
    //result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) =>student.score * 2);
    console.log(result);
}

//Q8.check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 40);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}
console.clear();
//Q9. compute students'average score
{
    const result = students.reduceRight((prev, curr) => prev +curr.score, 0);
    console.log(result / students.length);
}

//Q10.make a string containing all the scores
//result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map(student => student.score)
    .filter((score) => score >=50)
    .join();
    console.log(result);

}

//Bonus! do sorted in ascending order
//result shoulb be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b) => a -b)
    .join();
    console.log(result);
}