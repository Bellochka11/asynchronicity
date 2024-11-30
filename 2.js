// Реализуйте функцию для отправки данных о пользователе на сервер:
//     Функция saveUserData● Описание: ○Функцияпринимает объект с данными о пользователе и использует
// fetch для отправки данных на удаленный сервер.○Функциявозвращает промис, который разрешается, если данные
// успешно отправлены.○Еслизапрос неуспешен, промис должен быть отклонен с
// соответствующим сообщением об ошибке.●Подсказка: ○Используйте метод POST и задайте заголовок Content - Type как
// application / json.○Объектсданными опользователе необходимо сериализовать в
// JSON - строку с помощью JSON.stringify()

async function saveUserData(userData) {
    const url = 'https://gb.ru/lessons/459627/homework';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Failed to save user data');
        }

        return;
    } catch (error) {
        throw new Error(`Error saving user data: ${error.message}`);
    }
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.error(error);
    });