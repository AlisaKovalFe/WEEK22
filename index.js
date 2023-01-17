let user = undefined;

try {
    console.log(`Hi, ${user.name}`);
}
catch(err) {
    console.log('Имя пользователя не заполнено');
}

try {
    let json = JSON.parse(`{"age":33}`);
    if (!json.name) {
        throw new SyntaxError('Данные неполные')
    }
    console.log(json.name);
}
catch(err) {
    console.log('Некорректно введены данные. Подробности: ' + err.message);
}

try {
    let a = parseInt('ыыы')
    if (a !=Number) {
        throw Error('это не число')
    }
    console.log(a);
}
catch(err) {
    console.log('Не могу преобразовать: ' + err.message)
}