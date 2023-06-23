'use strict';

let breakfast = [
    {
        id: 1,
        title: 'Манная каша',
        img: './images/breakfast/manna-kasha.jpg',
        url: 'https://1000.menu/cooking/22871-mannaya-kasha-na-moloke-i-vode',
    },
    {
        id: 2,
        title: 'Твороженная запеканка',
        img: './images/breakfast/gerkules-kasha.jpg',
    },
    {
        id: 3,
        title: 'Сырники',
        img: './images/breakfast/sirniki.jpeg',
    },
    {
        id: 4,
        title: 'Геркулесовая каша',
        img: './images/breakfast/gerkules-kasha.jpg',
    },
    {
        id: 5,
        title: 'Рисовая каша',
        img: './images/breakfast/rise-kasha.jpg',
    },
    {
        id: 6,
        title: 'Варенные яйца',
        img: './images/breakfast/varyoniy-yayzcha.jpg',
    },
    {
        id: 7,
        title: 'Жаренные яйца',
        img: './images/breakfast/zharenie-yaychsa.jpeg',
    },
    {
        id: 8,
        title: "Омлет",
        img: '',
    },
    {
        id: 9,
        title: "Жаренная картошка",
    },
    {
        id: 10,
        title: "Гренки",
        img: '',
    },
    {
        id: 11,
        title: "Оладьи",
        img: "",
    },
    {
        id: 12,
        title: "Нондамдам",
        img: '',
    },
    {
        id: 13,
        title: "Куймок",
        img: '',
    },
    {
        id: 14,
        title: "Картошкамалхам",
        img: '',
    },
    {
        id: 15,
        title: "Блинчик с творогом",
        img: '',
    },
    {
        id: 16,
        title: "Творог со сметаной",
        img: '',
    },
    {
        id: 17,
        title: "Хлеб с маслом",
        img: '',
    },
];

let lunch = [
    {
        id: 20,
        title: 'Суп гороховый',
        img: './images/breakfast/manna-kasha.jpg',
        url: 'https://1000.menu/cooking/22871-mannaya-kasha-na-moloke-i-vode',
    },
    {
        id: 21,
        title: 'Борщ украинский',
        img: './images/breakfast/tvorojen-zapekanka.jpg',
    },
    {
        id: 22,
        title: 'Плов из курицы',
        img: './images/breakfast/sirniki.jpeg',
    },
    {
        id: 23,
        title: 'Гречка и котлеты',
        img: './images/breakfast/gerkules-kasha.jpg',
    },
    {
        id: 24,
        title: 'Макароны по флотски',
        img: './images/breakfast/rise-kasha.jpg',
    },
    {
        id: 25,
        title: 'Курица на углях или гриль',
        img: './images/breakfast/varyoniy-yayzcha.jpg',
    },
    {
        id: 26,
        title: 'Рассольник',
        img: './images/breakfast/zharenie-yaychsa.jpeg',
    },
        
];

// var breakfast = ["Манная каша", "Твороженная запеканка", "Сырники", "Геркулес", "Рисовая каша", "Жаренные яйца", "Варенные яйца", "Омлет", "Жаренная картошка", "Гренки", "Оладьи", "Нондамдам", "Куймок", "Картошкамалхам", "Блинчик с творогом", "Творог со сметаной", "Хлеб с маслом"];
//var lunch = ["Картошка с сыром", "Пюре с котлетой", "Картошка фри", "Мастова", "Вермишель", "Макарон-палов", "Шула", "Гречка-палов", "Гарнир с подливом", "Жаренннае яйца с помидором", "Пицца", "Борщ", "Лагман", "Грибной суп", "Сырный Суп", "Хрущевский суп", "Бургер"];
var dinner = ["Лазанья", "Шашлык", "Отбивное мясо", "Резашурбо", "Щи", "Куринный бульон", "Хомшурбо", "Рагу", "Жаренная курочка", "Плов", "Манту", "Хонум", "Пельмени", "Картошка и мясо", "Мошгурунч", "Шуламошак", "Дамлама", "Макароны по флотски", "Столичный салат (Оливье - вместо колбасы отварная курица)", "Салат овощной", "Курица с ананасом"];
var dessert = ["Шарлотка", "Мороженное", "Пироженное", "Пряники", "Компот", "Круасаны"];

var foodBreakfast = Math.floor(Math.random() * breakfast.length);
var foodLunch = Math.floor(Math.random() * lunch.length);
var foodDinner = Math.floor(Math.random() * dinner.length);
var foodDessert = Math.floor(Math.random() * dessert.length);

var toMorning = breakfast[foodBreakfast];
var toLuch = lunch[foodLunch];
var toDinner = dinner[foodDinner];
var toDessert = dessert[foodDessert];



let breakfastImg = document.getElementById("breakfastImg");
let breakfastText = document.getElementById('breakfastText');
// let breakfastRecept = document.querySelector(['data-id="breakfastRecept"']);

breakfastImg.src = toMorning.img;
breakfastText.textContent = toMorning.title;
breakfastRecept.href = toMorning.url;

lunchImg.src = toLuch.img;
lunchText.textContent = toLuch.title;
lunchRecept.href = toLuch.url;







// document.getElementById('breakfast').innerHTML = toMorning;
// document.getElementById('lunch').innerHTML = toLuch;
// document.getElementById('dinner').innerHTML = toDinner;
// document.getElementById('dessert').innerHTML = toDessert;

// let breakfastImg = insertFoodImages(images);
// document.getElementById("breakfastImg").innerHTML = breakfastImg;




