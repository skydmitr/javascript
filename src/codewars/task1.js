// Создайте простую функцию с именем greet, которая возвращает самое известное "hello world!".

function returnName() {
    console.log('Hello world');
}

//Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост2).
// если ИМТ <= 18,5, возвращается "Недостаточный вес"
// если ИМТ <= 25,0, вернуть значение "Нормальный"
// если ИМТ <= 30,0, возвращается "Избыточный вес"
// если ИМТ > 30, возвращается "Ожирение"


function bmi() {
    let weight = parseFloat(prompt('Укажи свой вес', ''));
    let height = parseFloat(prompt('Укажи свой рост', ''));

    let func = weight / height ** 2;


    if (func <= 18.5) {
        alert('Недостаточный вес');
    } else if (func <= 25) {
        alert('Нормальный');
    } else if (func <= 30) {
        alert('Избыточный вес');
    } else if (func > 30) {
        alert('Ожирение');
    }
}

////////////////////////////////
//Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.
//Массив может содержать числа или строки. X может быть любым из них.
//Возвращает, true если массив содержит значение, false если нет.

let x;
let  arr = ['', null, x];

function checkArray () {
    let result = (arr.length > 0)
        ? console.log('Массив содержит значение ' + typeof arr[2])
        : console.log('Массив не содержит значение');
}

/////////////////////////////////
//Вы были в кемпинге со своими друзьями далеко от дома, но когда приходит время возвращаться, вы понимаете, что ваше топливо на исходе, а ближайшая заправка находится в 50 км отсюда!
//Вы знаете, что в среднем ваш автомобиль расходует около 25 км на 5литров. Осталось 10 литров.
//Учитывая эти факторы, напишите функцию, которая сообщает вам, возможно ли добраться до насоса или нет.
//Функция должна возвращать, true если это возможно, и false если нет.

let expenditureFuel = 5; // расход на 25км
let roadFuel = 50 // дорога до заправки
let tank = 10 // остаток в баке

 function func(){
    if (((tank/expenditureFuel)*25) === roadFuel){
        console.log ('да');
    }else{
        console.log ('нет');    }
 }

bmi();


/////////////////////////////////
//Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на "0", а любую цифру 5 и выше на "1".
// Верните результирующую строку.

// const arrList = [1,2,3,4,5,6,7,8,9,10,15]
//
//  arr2 = (arrList.forEach((item) => {
//     console.log(item);
// }))
//
//  arr = () => {
//         if(arr.item() < 5){
//         }
// }

