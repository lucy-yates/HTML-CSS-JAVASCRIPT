console.log("hello from starter")
let myname = "lucy"
console.log(myname);
console.log(typeof myname);

let muppet = false;
console.log(muppet);
console.log(typeof muppet);

let demo;
console.log(demo);
console.log(typeof demo);

let plum = null;
console.log(plum);
console.log(typeof plum);

const cottagecheese = 0.7;
console.log(cottagecheese);
console.log(typeof cottagecheese);

console.log("==================");

let numb = 4;
console.log(4 + 4);
console.log(4 - 4);
console.log(4 * 4);
console.log(4 / 4);
console.log(4 ** 4);
console.log(10 % 4);

let numm = 12;
console.log(numm == 24);
console.log('1' == 1);

console.log('ur' + ' mum');

// Predicat what each line will print, then uncomment it and check you were right
let x = 1;
// Aritmetic Operators
// 10
console.log(5 + 5);
// 50
console.log(5 * 10);
// 1
console.log(10 % 3);
// 20
console.log(5 + 10 / 2 * 5 - 10);
// 30
console.log((6 + 10) / 2 * 5 - 10);

// Assignment Operators
// 2
console.log(x = x + 1);
// 3
console.log(x += 1);
// Try and figure out the difference
// 3
console.log(x++);
// 5
console.log(++x);

// Relational Operators
// true
console.log(5 > 3);
// false
console.log(3 != 3);
// false
console.log(!5 > 3);

// Mismatched Types
// 55
console.log(5 + "5");
// 6
console.log(5 + true);
// 25
console.log(5 * "5");
// true
console.log(1 == true);
//false
console.log(1 === true);

console.log("==================");

const arr = ["loosie", "buff", "janyewest", "bigtone"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log("==================");
let age = 10
console.log(age);

if (age <= 17) {
    console.log("underage");

} else if (age <= 65) {
    console.log("insurable");


} else {
    console.log("out of range");
}

console.log("==================");
let crunch = 1;
for (let crunch = 1; crunch <= 100; crunch++) {
    console.log(crunch);
    if (crunch % 3 == 0 && crunch % 5 == 0 && crunch % 2 == 0) {
        console.log("fizz buzz wham");
    }

    else if (crunch % 3 == 0 && crunch % 2 == 0) {
        console.log("fizz wham");
    }

    else if (crunch % 5 == 0 && crunch % 2 == 0) {
        console.log("buzz wham");
    }

    else if (crunch % 2 == 0) {
        console.log("wham");
    }

    else if (crunch % 3 == 0) {
        console.log("fizz");
    }

    else if (crunch % 5 == 0) {
        console.log("buzz");
    }

    else {
        console.log("george michael");
    }
}
console.log("==================");

let munch = 17
if (munch % 3 == 0 && munch % 5 == 0 && munch % 2 == 0) {
    console.log("fizz buzz wham");
}

else if (munch % 3 == 0 && munch % 2 == 0) {
    console.log("fizz wham");
}

else if (munch % 5 == 0 && munch % 2 == 0) {
    console.log("buzz wham");
}

else if (munch % 2 == 0) {
    console.log("wham");
}

else if (munch % 3 == 0) {
    console.log("fizz");
}

else if (munch % 5 == 0) {
    console.log("buzz");
}

else {
    console.log("george michael");
}

console.log("==================");



for (let k = 1; k <= 10; k++) {
    console.log("hello");
}

console.log("==================");

for (let index = 0; index < 4; index++) {
    const element = arr[index];
    console.log(arr[index]);
}

console.log("==================");

console.log("for-of-loop");
for (let char of arr) {
    console.log("char:", char);
}

console.log("==================");

const multof2 = [2,4,6,8,10]
for (let number of multof2) {
    console.log("number:", number);
}

console.log("==================");

var nums = [1,2,3,4,5,6,7,8,9,10], 
    num = 0;
for (var i = 0; i < nums.length; i++) {
    num += +nums[i];
    console.log(num);
}


console.log("==================");

function generateCoinChange(pence,cost) {
    let tenner = 0;
    let fiver = 0;
    let twopound = 0;
    let onepound = 0;
    let fiftypence = 0;
    let twentypence = 0;
    let tenpence = 0;
    let fivepence = 0;
    let twopence = 0;
    let onepence = 0;
    let remainingChange = pence-cost;

    while (remainingChange >= 1000) {
        remainingChange -= 1000;
        tenner++;
    }
    while (remainingChange >= 500) {
        remainingChange -= 500;
        fiver++;
    }
    while (remainingChange >= 200) {
        remainingChange -= 200;
        twopound++;
    }
    while (remainingChange >= 100) {
        remainingChange -= 100;
        onepound++;
    }
    while (remainingChange >= 50) {
        remainingChange -= 50;
        fiftypence++;
    }
    while (remainingChange >= 20) {
        remainingChange -= 20;
        twentypence++;
    }
    while (remainingChange >= 10) {
        remainingChange -= 10;
        tenpence++;
    }
    while (remainingChange >= 5) {
        remainingChange -= 5;
        fivepence++;
    }
    while (remainingChange >= 2) {
        remainingChange -= 2;
        twopence++;
    }
    while (remainingChange > 0) {
        remainingChange -= 1;
        onepence++;
    }
    console.log(`£10: ${tenner}, £5: ${fiver}, £2: ${twopound}, £1: ${onepound}, 50p: ${fiftypence}, 20p: ${twentypence}, 10p: ${tenpence}, 5p: ${fivepence}, 2p: ${twopence}, 1p: ${onepence}`)
};
generateCoinChange(940, 500);
generateCoinChange(1000, 379);
generateCoinChange(230, 100);
generateCoinChange(2000, 112);

console.log("==================");

const me = {
    name: "Lucy ",
    age: 22,
    job: "Banking Consultant",
    hobbies: ["Games", "Music", "Baking"],
    pets: [{
        name: "Bandit",
        species: "Hamster"
    }],
    dob: "2001-05-25"
}

const Patryk = {
    name: "Patryk",
    age: 23,
    job: "Customer Advisor",
    hobbies: ["Games", "Music", "esports"],
    pets: [
        {
            species: "Dog"
        }
    ],
}

const Mike = {
    name: "Mike",
    age: 36,
    job: "Mortgage Advisor",
    hobbies: ["Leeds"],
    pets: [{
        name: "Luna",
        species: "Dog"
    }],
}

// can put objects in arrays just not like primitives
const trainers = [me, Mike, Patryk];


// can access an objects variables with this syntax object.key

console.log("My name:", me.name);

// loop through the array
// trainers[i] finds the trainer OBJECT at that index
// can access the 'attributes' of that object using the object.key syntax
/// i.e. trainers[i].name finds the NAME of the trainer OBJECT at that index
for (let i = 0; i < trainers.length; i++) {
    console.log("I:", i, "Trainer:", trainers[i]);
    console.log("Name:", trainers[i].name);
}

// Can use the shortcut to avoid having to deal with the index at all
for (const trainer of trainers) {
    console.log("Name:", trainer.name);
}

// Can update a value using the object.key syntax
// console.log(me);
// me.age = 30;
// console.log(me);

console.log("==================");

function intro(name) {
    document.write("Hello! My name is " + name);
}

intro("Jordan");


function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if ( num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
    
}

fizzBuzz(90)



function sum(num, num2) {
    return num + num2; // the OUTPUT of this function is num + num2
}

let add = sum (6,3);
console.log(add);


const s = (s, t) => s * t;
s(9,5)


var greet = function () { 
    console.log("munch crunch"); 
}; 
  
greet();

var dismiss = () =>  
    { 
        console.log("byeeeeeeeeee"); 
    } 
      
    dismiss(); 

    

    