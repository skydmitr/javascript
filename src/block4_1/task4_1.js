// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.


let user1 ={
    name: "John",
    surname: "Smith"
}
user1.name = "Pete";
// console.log(user);
delete user1.name
// console.log(user);

/////////////////////////////////////

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

const obj ={
};

function isEmpty(obj) {
    for (let key in obj) {
        console.log(false)
        break;
    }
        console.log(true)
}
//isEmpty(obj)

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
};
console.log(user.name) // будет вывеено John

// это будет работать?
user.name = "Pete";
console.log(user.name) // будет вывеено Pete, т.к перезаписалы свойство объекта

//У нас есть объект, в котором хранятся зарплаты нашей команды:
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries () {

    let sum = salaries.John + salaries.Ann + salaries.Pete;
    let isEmpty = true;
    for(let key in salaries){
        isEmpty = false;
        break;
    }

    if(isEmpty){
        console.log(`Список пуст`)
    }else {
        console.log(`Список не пуст\nСумма всех зарплат ${sum}`)
    }

}

//sumSalaries();

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric (obj) {
    for (let key in obj){
        if (typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
}
console.log(menu)
multiplyNumeric(menu)
console.log(menu)