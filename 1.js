// Реализуйте асинхронную функцию для получения данных о пользователе с удаленного
// сервера:
//     Функция getUserData● Описание:
//     1. Функция принимает идентификатор пользователя(ID) в качестве
// аргумента и использует fetch для получения данных с удаленного
// сервера.
// 2. Функция возвращает промис, который разрешается с объектом данных о
// пользователе, если запрос был успешным.
// 3. Если пользователь с указанным ID не найден, промис должен быть
// отклонен с соответствующим сообщением об ошибке.●Последовательность действий:
//     1. Вызовите fetch, передав URL с нужным ID пользователя.
// 2. Если ответ успешен(код 200), извлеките данные с помощью
// response.json().
// 3. Верните объект с данными о пользователе.
// 4. Если ответ не успешен, отклоните промис с сообщением об ошибке.

async function getUserData(userId) {
    const url = `https://gb.ru/lessons/459627/homework${userId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`User with ID ${userId} not found`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error(`Error fetching user data: ${error.message}`);
    }
}

getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));