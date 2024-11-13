/*
1.Получить задачу (написать запрос пользователя и подкл комп рандом(массив))
2. Обдумать условия
3. Уточнить условия
4.составить алгоритм
5. уточнить алгоритм
6. исправить алгоритм и добавить комменты
7. перепроверить
8. пишем код
*/
const choices = ['камень', 'ножницы', 'бумага'];//выбор  из массива
/*
Функция получения выбора компьютера
return рандомный выбор из массива элемента
*/
function getChoiseOfComputer() {
    //посмотреть как работает Math.random
    return choices[Math.floor(Math.random() * choices.length)];
}
function getChoiseOfUser() {
    let choiseUser = prompt('камень, ножницы, бумага');
    return choiseUser;
}
function winnerUserVsComputer(choiseUser, choiseOfComputer) {
    alert('выбор компьютера ' + choiseOfComputer);
    if (choiseUser === choiseOfComputer) {
        return 'Ничья';
    }
    else if ((choiseUser === 'бумага' && choiseOfComputer === 'камень') || (choiseUser === 'камень' && choiseOfComputer === 'ножницы') || (choiseUser === 'ножницы' && choiseOfComputer === 'бумага')) {
        return 'победа'
    }
    else {
        return 'проигрыш'
    }
}

function playGame() {
    let userChoice = getChoiseOfUser();
    let compChoice = getChoiseOfComputer();
    const result = winnerUserVsComputer(userChoice, compChoice);
    alert(result);
}