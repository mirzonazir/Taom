
const images = [
    {
        id: 1,
        src: '/images/manna-kasha.jpg',
    },
    {
        id: 2,
        src: '/images/tvorojen-zapekanka.jpg',
    },
    {
        id: 3,
        src: '/images/sirniki.jpeg',
    },
];

function insertFoodImages(item, breakfast) {
    if (item.id === breakfast) {
        return item.src;
    }
}
var breakfast = ["Манная каша", "Твороженная запеканка", "Сырники", "Геркулес", "Рисовая каша", "Жаренные яйца", "Варенные яйца", "Омлет", "Жаренная картошка", "Гренки", "Оладьи", "Нондамдам", "Куймок", "Картошкамалхам", "Блинчик с творогом", "Творог со сметаной", "Хлеб с маслом"];
var lunch = ["Картошка с сыром", "Пюре с котлетой", "Картошка фри", "Мастова", "Вермишель", "Макарон-палов", "Шула", "Гречка-палов", "Гарнир с подливом", "Жаренннае яйца с помидором", "Пицца", "Борщ", "Лагман", "Грибной суп", "Сырный Суп", "Хрущевский суп", "Бургер"];
var dinner = ["Лазанья", "Шашлык", "Отбивное мясо", "Резашурбо", "Щи", "Куринный бульон", "Хомшурбо", "Рагу", "Жаренная курочка", "Плов", "Манту", "Хонум", "Пельмени", "Картошка и мясо", "Мошгурунч", "Шуламошак", "Дамлама", "Макароны по флотски", "Столичный салат (Оливье - вместо колбасы отварная курица)", "Салат овощной", "Курица с ананасом"];
var dessert = ["Шарлотка", "Мороженное", "Пироженное", "Пряники", "Компот", "Круасаны"]

var foodBreakfast = Math.floor(Math.random() * breakfast.length);
var foodLunch = Math.floor(Math.random() * lunch.length);
var foodDinner = Math.floor(Math.random() * dinner.length);
var foodDessert = Math.floor(Math.random() * dessert.length);

var toMorning = breakfast[foodBreakfast];
var toLuch = lunch[foodLunch];
var toDinner = dinner[foodDinner];
var toDessert = dessert[foodDessert];

document.getElementById('breakfast').innerHTML = toMorning;
document.getElementById('lunch').innerHTML = toLuch;
document.getElementById('dinner').innerHTML = toDinner;
document.getElementById('dessert').innerHTML = toDessert;

let breakfastImg = insertFoodImages(images);
document.getElementById("breakfastImg").innerHTML = breakfastImg;



