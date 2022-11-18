//task1
let obj = {
    c: 'c'
}
document.writeln(obj.c + "<br>");
document.writeln(obj["c"] + "<br>");
//task2
let petya = {
    salary: 10000
}
let kolya = {
    salary: 20000
}
let array = [petya, kolya];
for(var i = 0; i < array.length; i++) {
    document.write(array[i].salary + "<br>");
}
//task3
var date = new Date();
var weekDay = [
    monday = {
        day: 1,
        "name": "monday"
    },
    tuesday = {
        day: 2,
        "name": "tuesday"
    },
    wednesday = {
        day: 3,
        "name": "wednesday"
    },
    thursday = {
        day: 4,
        "name": "thursday"
    },
    friday = {
        day: 5,
        "name": "friday"
    },
    saturday = {
        day: 6,
        "name": "saturday"
    },
    sunday = {
        day: 7,
        "name": "sunday"
    }
]
for(var i = 0; i < weekDay.length; i++) {
    if (date.getDay() == weekDay[i].day) {
        document.write(weekDay[i].name + "<br>");
    }
}
//task4
let day = 3;
for(var i = 0; i < weekDay.length; i++) {
    if (day == weekDay[i].day) {
        document.write(weekDay[i].name + "<br>");
    }
}
//task5
let number1__example = {
    numerator: 5,
    denominator: 2
}
let number2__example = {
    numerator: 2,
    denominator: 5
}

function sum(number1, number2) {
    return (number1.numerator / number1.denominator) + (number2.numerator / number2.denominator);
}

function sub(number1, number2) {
    return (number1.numerator / number1.denominator) - (number2.numerator / number2.denominator);
}

function mul(number1, number2) {
    return (number1.numerator / number1.denominator) * (number2.numerator / number2.denominator);
}

function div(number1, number2) {
    return (number1.numerator / number1.denominator) / (number2.numerator / number2.denominator);
}

function reduction(number) {
    return number.numerator / number.denominator;
}

document.write(sum(number1__example, number2__example) + "<br>");
document.write(sub(number1__example, number2__example) + "<br>");
document.write(mul(number1__example, number2__example) + "<br>");
document.write(div(number1__example, number2__example) + "<br>");
document.write(reduction(number1__example) + "<br>");
//task6
let array2 = [
    {
        "name": 'eggs',
        count: 3,
        isBought: false
    },
    {
        "name": 'milk',
        count: 2,
        isBought: false
    },
    {
        "name": 'meat',
        count: 19,
        isBought: true
    }
];
for(i = 0; i < array2.length; i++) {
    document.write(array2[i].name + " " + array2[i].isBought + " ");
}
document.write('<br>');
array2.sort(function(a,b) {
    return (a == b)? 0 : a? -1 : 1;
});
for(i = 0; i < array2.length; i++) {
    document.write(array2[i].name + " " + array2[i].isBought + " ");
}