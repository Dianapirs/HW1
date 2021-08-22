// task 1
console.log('First task');
const str = 'Привет';
const sum = 123;
const num = 15.8;
const flag = true;
const txt = 'true';

console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);
console.log('');
// task 2
console.log('Second task');
let a1 = 5 % 3;
console.log(a1, typeof a1);
let a2 = 3 % 5;
console.log(a2, typeof a2);
let a3 = 5 + '3';
console.log(a3, typeof a3);
let a4 = '5' - 3;
console.log(a4, typeof a4);
let a5 = 75 + 'кг';
console.log(a5, typeof a5);
let a6 = 785 * 653;
console.log(a6, typeof a6);
let a7 = 100 / 25;
console.log(a7, typeof a7);
let a8 = 0 * 0;
console.log(a8, typeof a8);
let a9 = 0 / 2;
console.log(a9, typeof a9);
let a10 = 89 / 0;
console.log(a10, typeof 0);
let a11 = 98 + 2;
console.log(a11, typeof a11);
let a12 = 5 - 98;
console.log(a12, typeof a12);
let a13 = (8 + 56 * 4) / 5;
console.log(a13, typeof a13);
let a14 = (9 - 12) * 7 / (5 + 2);
console.log(a14, typeof a14);
let a15 = +'123';
console.log(a15, typeof a15);
let a16 = 1 || 0;
console.log(a16, typeof a16);
let a17 = false || true;
console.log(a17, typeof a17);
let a18 = true > 0;
console.log(a18, typeof a18);
console.log('');

// third task
console.log('Third task');

let width = 10;
let height = 23;
const SPryam = width * height;
console.log('Площадь прямоугольника равна', SPryam, 'см\u00B2');
console.log('');

// Forth task
console.log('Forth task');
let HCilindra = 10;
let d = a7;
const VCilindra = Math.pow(d, 2) / 4 * 3.14 * HCilindra;
console.log ('Объем цилиндра равен', VCilindra, 'м\u00B3');
console.log('');

// Fifth task
console.log('Fifth task');
let rKruga = 5;
const SKruga = rKruga ** 2 * 3.14;
console.log('Площадь круга равна', SKruga, 'см\u00B2');
console.log('');

// Sixth task
console.log('Sixth task');
let a = 5,
    b = 7,
    h = 10;
const STrap = (a + b) / 2 * h;
console.log('Площадь трапеции равна', STrap, 'см\u00B2');
console.log('');

//Seventh task
console.log('Seventh task');
let S = 2000000,
    p = 10,
    years = 5;
const Pereplata = ((years * 12) * (S * ((p / 100 / 12) * (1 + (p / 100 / 12)) ** (years * 12)) / ((1 + (p / 100 / 12)) ** (years * 12) - 1)) - S);
console.log('Сумма переплаты по кредиту составит', Pereplata, 'рублей');
console.log('');

// Eighth task
console.log('Eighth task');
    a = 8;
    b = 3;
let x = (16 - a + (2 * b)) / 2;
console.log('Первый x равен', x);
    x = (a - (15 * b)) / (b - 6);
console.log('Второй x равен', x);
    x = 23780 / (3 + a + b);
console.log('Третий x равен', x);
console.log('');


// Ninth task
console.log('Ninth task');
let par = "Бывало, спит у ног собака,\nкостер занявшийся гудит,\nи женщина из полумрака\nглазами зыбкими глядит.\n\n\nПотом под пихтою приляжет\nна куртку рыжую мою\nи мне, задумчивая, скажет:\n\n\n\"А ну-ка, спой...!\"- и я пою.";
console.log(par);
console.log('');

// Tenth task
console.log('Tenth task');
const str1 = 'Он подошел и сорвал аленький цветочек.',
      str2 = ' В ту же минуту, безо всяких туч,',
      str3 = ' блеснула молния и ударил гром,',
      str4 = ' индо земля зашаталась под ногами-и вырос,',
      str5 = ' как будто из-под земли, перед купцом:',
      str6 = ' зверь не зверь, человек не человек,',
      str7 = ' а так какое-то чудище, страшное и мохнатое,',
      str8 = ' и заревел он голосом диким:';
const text = str1 + str2 + str3 + str4 + str5 + str6 + str7 + str8;
console.log(text);