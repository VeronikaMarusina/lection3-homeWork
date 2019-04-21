//  Вивести всі парні числа на проміжку від 0 до 200, використовуючи цикли for, while та do ...while.
let i = 0;

while(i < 200){
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

i = 0;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while(i < 500);

for (let i = 0; i < 200; i++) { 
    if (i % 2 === 0) {
        console.log(i);
    }
  }

//  Знайти суму чисел кратних на age на проміжку від 0 до 1 000; де age = ваш вік, використати цикли while і for.

let age = 24;
let sum = 0;

while(i < 1000) {
    if (i % age === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);

sum = 0;

for (let i = 0; i < 1000; i++) { 
    if (i % age === 0) {
        sum += i;
    }
  }
console.log(sum);

//  Написати функцію яка перетворює рядок “Якщо ви не здаєтеся, це має значення” в масив. 
//  Використати метод split (перетворює рядок в масив).

let textString = 'Якщо ви не здаєтеся, це має значення';
const listArray = textString.split(/[ ,]+/)
console.log(listArray);

//  Ввести з клавіатури 12 чисел. Вивести найменше число, порядковий номер найбільшого числа, 
//  кількість парних та кількість від’ємних чисел. Використати функції. 
//  Числа ввести через кому. UI частина - поле для вводу та кнопка.

const input = document.getElementById('input');
const min = document.getElementById('min');
const maxIndex = document.getElementById('maxIndex');
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const result = document.getElementById('result');

let listNumbberArray;

function splitToList(value){
    listNumbberArray = value.split(/[ ,]+/);
    elementCount = listNumbberArray.length;
    maxEl = listNumbberArray[0]/1;
    minResult = listNumbberArray[0]/1;
}

let maxIndexResult = 0;
let count1Result = 0;
let count2Result = 0;

min.addEventListener('click', function(){
    splitToList(input.value);
    for(i = 0; i < elementCount; i++){
        if (listNumbberArray[i]/1 <= minResult){
                minResult = listNumbberArray[i]/1;
        }
        result.innerHTML = 'min el  '+ minResult;
    }        
})


maxIndex.addEventListener('click', function(){
    splitToList(input.value);
    for (i = 1; i < elementCount; i++) {
        if (listNumbberArray[i]/1 > maxEl) {
            maxIndexResult = i;
            maxEl = listNumbberArray[i]/1;
        }
        result.innerHTML = 'max el # '+ maxIndexResult;
    }
})


count1.addEventListener('click', function(){
    splitToList(input.value);
    for (i = 1; i < elementCount; i++) {
        if (i % 2 === 0) {
            count1Result += 1;
        }
        result.innerHTML = 'kilkist parnyh '+ count1Result;
    }
})

count2.addEventListener('click', function(){
    splitToList(input.value);
    for (i = 1; i < elementCount; i++) {
        if (listNumbberArray[i] < 0) {
            count2Result += 1;
        }
        result.innerHTML = 'kilkist videmnyh '+ count2Result;
    }
})