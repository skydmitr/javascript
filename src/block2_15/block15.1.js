//Функция pow(x,n)

function Pow() {
    alert(x**y);
}

x = prompt('Введи 1 число', '')
y = prompt('Введи 2 число', '')

    if (y >= 1&& y % 1==0){
        alert (pow(x,y))
    } else {
        alert (`Степень ${y} не поддерживается, используйте натуральное число`)
    }