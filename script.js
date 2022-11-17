let obj = {
    c: 'c'
}
document.writeln(obj.c + "<br>");
document.writeln(obj["c"] + "<br>");

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
var date = new Date();
var weekDay = new Array(7);
weekDay[0] = "Воскресенье";
weekDay[1] = "Понедельник";
weekDay[2] = "Вторник";
weekDay[3] = "Среда";
weekDay[4] = "Четверг";
weekDay[5] = "Пятница";
weekDay[6] = "Суббота";
var result = weekDay[date.getDay()];
alert(weekDay[date.getDay()]);