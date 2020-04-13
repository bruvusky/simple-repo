console.log("hello");
//alert('hello this is brian');
//variables
var a = 'smoothie'
console.log(a);

var somenum = 45;
console.log(somenum);
//var age = prompt('what is your age?');
//document.getElementById('some text ').innerHTML = age;
//Numbers
var num1 = 11;
num1++;
num1--;
num1--;
console.log(num1);
console.log(num1 % 6);

num1 += 20;
console.log(num1);

//functions
function fun() {
    console.log('this is a function');

}
fun();
/*unction greetings(name) {
    var result = 'hello' + '  ' + name;
    console.log(result);
}
var name = prompt(' what is your name?');
greetings(name);

// function arguments
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(12, 10);
//while loops

var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}

//for loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}
*/
//data types
let yourage = 18; //number
let name = 'bob'; //string
let yourname = { first: 'jane', last: 'brine' }; //object
let truth = false;
let groceries = ['apples', 'bananas', ' oranges']; //array
let random; //undefined
let nothing = null; //value null

//strings in javascript
let fruits = 'banana, apples, oranges, blackberry ';
let morefruits = 'banana\napples' //new line
console.log(morefruits);

console.log(fruits.length);
console.log(fruits.indexOf('nan'));
console.log(fruits.slice(2, 6));
console.log(fruits.replace('ban', '123'));
console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits.charAt(2));
console.log(fruits[2]);
console.log(fruits.split(' , ')); //split by a comma
console.log(fruits.split('  ')); //split by a character

//arrays

let sch = ['banana', 'apples', 'orange', 'pinapple']
sch = new Array('banana', 'apples', 'orange', 'pinapple')
console.log(sch[2]); //acces  value at index 2nd
sch[0] = 'pear';
console.log(sch);
for (let i = 0; i < sch.length; i++) {
    console.log(sch[i]);
}
//array coomon methods
console.log('to string ', sch.toString());
console.log(sch.join(' * '));
console.log(sch, sch.pop(), sch);// removes last item
console.log(sch.push('blackberries'), sch); //append
//console.log(sch[4]);
//sch[4] = 'potatoes'
sch[sch.length] = 'new fruit' //same as push
console.log(sch);
sch.shift(); // remove first element from a list
console.log(sch);
sch.unshift('kiwi'); // adds first element from a list
console.log(sch);

let vegetables = ['asparagus', 'tomato', 'kales'];
let allgroceries = sch.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1, 4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort());

let sumnumbers = [23, 10, 4, 6, 20, 41, 255, 1, 2, 3, 334, 321, 2];
console.log(sumnumbers.sort(function (a, b) { return (a - b) }));//sorting in ascending order
console.log(sumnumbers.sort(function (a, b) { return (b - a) }));//sorting in decending order

let emptyarray = new Array();
for (let num = 0; num < 10; num++) {
    emptyarray.push(num);

}
console.log(emptyarray);
//objects in javascript
//a.k.a 
//dictionaries in python
let student = {
    first: 'brian',
    last: 'Gekara',
    age: 25,
    height: 182,
    studentinfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;

    }
};
//console.log(student.first);
//console.log(student.last);
//student.first = 'dancan'; //change  value
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentinfo());
var age = 78 //prompt('what is your age? ')
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';

} else {
    status = 'not my audience';
}
console.log(status);

//switch statements in javascript
//difference between weekday and weekend 
//day 0  = sunday , weekend
//day 6 = saturday , weekend
//day 5 = friday, weekend
//day 4 = thursday
//day 3 = wednesday
//day 2 = teusday
//day 1 = monday


switch (6) {
    case 0:
        Text = 'weekend';
        break;
    case 5:
        Text = 'weekend';
        break;
    case 6:
        Text = 'weekend';
        break;
    default:
        Text = 'weekday';
        break;


}
console.log(Text);