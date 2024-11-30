// Реализуйте функцию, которая изменяет стиль элемента с задержкой:
//     Функция changeStyleDelayed● Описание: ○Функцияпринимает идентификатор элемента(id) и время задержки в
// миллисекундах(delay).○ После истечеения времени задержки, функция должна изменить стиль
// элемента.

function changeStyleDelayed(id, delay) {
    const element = document.getElementById(id);

    if (!element) {
        console.error(`Element with id "${id}" not found`);
        return;
    }

    setTimeout(() => {
        element.style.backgroundColor = 'lightblue';
        element.style.color = 'white';
        element.style.fontWeight = 'bold';
        console.log(`Style of element with id "${id}" has been changed.`);
    }, delay);
}

changeStyleDelayed('myElement', 2000);