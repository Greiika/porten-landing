// select-castom

/*
let filter = function () {
    let filterHeader = document.querySelectorAll('.filter__header');
    let filterItem = document.querySelectorAll('.filter__item');

    filterHeader.forEach(item => {
        item.addEventListener('click', filterToggle)
    });

    filterItem.forEach(item => {
        item.addEventListener("click", filterChoose)
    });

    function filterToggle() {
        this.parentElement.classList.toggle("is-active");
    }

    function filterChoose() {
        let text = this.innerText;
            filter = this.closest('.filter')
            currentText = filter.querySelector('.filter__current');
        currentText.innerText = text;
        filter.classList.remove('is-active');
    }
};

filter();
*/

// menu-burder

let menuBurger = document.querySelector(".menu__burger");
if(menuBurger) {
    const menuNav = document.querySelector(".menu");
    menuBurger.addEventListener('click', function(event){
        menuBurger.classList.toggle("active");
        menuNav.classList.toggle("active");
    });
}

//let product = {
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  autoplaySpeed: 2000,
//  autoplay: true,
//  infinite: true,
//  dots: true,
//  arrows: false
//  //centerMode: true
  
//};
//if ($(document).width() <= 571) {
//  $('.product').slick(product)
//}

//$(window).resize(function (){
//  if($(document).width() <= 571) {
//    if(!$(".product").hasClass("slick-initialized")) $('.product').slick(product);
//  } else {
//    if ($(".product").hasClass("slick-initialized")) $(".product").slick("unslick");
//  }
//});


// Игра угадай число на JavaScript  №1 ⊗jsPrStGGN

//let inp = document.querySelector('.input');
//let paragraph = document.querySelector('.paragraph');

//let num = Math.round(Math.random() * (100 - 1)) + 1;
//inp.addEventListener('keydown', function (event) {
//    if (event.key == 'Enter') {
//        if (inp.value == num) {
//            paragraph.textContent = 'тест';
//        } else if (inp.value < num) {   
//            paragraph.textContent = 'введите число побольше';
//        } else if (inp.value > num) {
//            paragraph.textContent = 'введите число поменьше';
//        }
//    }
//})


// Игра угадай ячейку на JavaScript  ⊗jsPrStGGC

// №1

//let table = document.querySelector('#table');
//let elems = document.querySelectorAll('.cell');
//elems.forEach((elem, index) => {
//    elem.addEventListener('click', function () {
//        if (item(index)) {
//            console.log(index)
//            this.style.backgroundColor = 'green';
//        }
//    })
//})

//let arr = [];
//for (let i = 0; i < 100; i++) {
//    arr.push(i)
//}
//let newArr = arr.map(i => [Math.random(), i]).sort().map(i => i[1]);
//let numberArr = newArr.slice(0, 10);

//function item (number) {
//    for (let item of numberArr) {
//        if (inArray(number, numberArr)) {
//            return item;
//        }
//    }
//}
//function inArray (elem, arr) {
//    return arr.indexOf(elem) !== -1;
//}


// №2

//let table = document.querySelector('#table');
//let elems = document.querySelectorAll('.cell');
//let btn = document.querySelector('.start');
//let paragraph = document.querySelector('.paragraph');

//btn.addEventListener('click', function () {
//    let time = 60;
    
//    let timerId = setInterval(function () {
//        paragraph.innerHTML = --time;
//        if (time == 0) {
//            clearInterval(timerId);
//        }
//    }, 1000);

//    let counter = 0;
//    elems.forEach((elem, index) => {
//        elem.addEventListener('click', function () {
//            if (item(index)) {
//                console.log(index)
//                this.style.backgroundColor = 'green';
//                counter++;
//                console.log(counter)
//                if (counter == 10 && time !== 0) {
//                    alert('Вы выйграли');
//                    clearInterval(timerId);
//                } else if (time == 0){
//                    alert("Вы проиграли");
//                }
//            }
//        })
//    })
    
//    let arr = [];
//    for (let i = 0; i < 100; i++) {
//        arr.push(i)
//    }
//    let newArr = arr.map(i => [Math.random(), i]).sort().map(i => i[1]);
//    let numberArr = newArr.slice(0, 10);
//    console.log(numberArr)
//    function item (number) {
//        for (let item of numberArr) {
//            if (inArray(number, numberArr)) {
//                return item;
//            }
//        }
//    }
//    function inArray (elem, arr) {
//        return arr.indexOf(elem) !== -1;
//    }
//})



// Экранная клавиатура на JavaScript ⊗jsPrStSK

// №1, №2

//let inp = document.querySelector('.input-keyboard');
//let backspace = document.querySelector('.key--backspace');
//let tab = document.querySelector('.key--tab');
//let capsLosk = document.querySelector('.key--capslock');
//let shift = document.querySelector('.key--shift');
//let ctrl = document.querySelector('.key--ctrl');
//let alt = document.querySelector('.key--alt');
//let enter = document.querySelector('.key--enter');
//let space = document.querySelector('.key--space');

//backspace.addEventListener('click', func);

//function func () {
//    if (inp.value == '') {
//        this.removeEventListener('click', func);
//    }
//    inp.value = inp.value.slice(0, -1);
//}
//let keyLetters = document.querySelectorAll('.key--letter')
//let isCapsLosk = false;

//for (let letter of keyLetters) {
//    let l = letter.innerHTML;
//    letter.addEventListener('click', function () {
//        inp.value += l;
        
//    })
//    let isCapsLosk = false;
//    capsLosk.addEventListener('click', function () {
//        if (!isCapsLosk) {
//            l = letter.innerHTML.toUpperCase();
//            letter.innerHTML = l;
//            isCapsLosk = true;
//        } 
//        else {
//            l = letter.innerHTML.toLowerCase();
//            letter.innerHTML = l;
//            isCapsLosk = false;
//        }
//    })    
//}



// Линейный календарь на JavaScript

// №1

//let calendar = document.querySelector('.linear-calendar');

//let now = new Date();
//let date = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
//for (let i = 1; i <= date; i++) {
//    let calendarDay = document.createElement('li');
//    calendarDay.innerHTML = i;
//    calendar.append(calendarDay);
//}


// №2

//let calendar = document.querySelector('.linear-calendar');

//let now = new Date();
//let date = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
//let days = now.getDate();
//for (let i = 1; i <= date; i++) {
//    let calendarDay = document.createElement('li');
//    if (i == days) {
//        calendarDay.style.backgroundColor = 'green';
//    }
//    calendarDay.innerHTML = i;
//    calendar.append(calendarDay);
//}


// №3

//let calendar = document.querySelector('.linear-calendar');
//let title = document.querySelector('.paragraph');

//let now = new Date();
//let date = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
//let days = now.getDate();
//let year = now.getFullYear();
//let numberMonth = now.getMonth();
//let arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
//arrMonth.forEach((month, index) => {
//    if (numberMonth == index) {
//        title.innerHTML = `${month} ${year}`
//    }
//})
//for (let i = 1; i <= date; i++) {
//    let calendarDay = document.createElement('li');
//    if (i == days) {
//        calendarDay.style.backgroundColor = 'green';
//    }
//    calendarDay.innerHTML = i;
//    calendar.append(calendarDay);
//}


// №4

//let calendar = document.querySelector('.linear-calendar');
//let months = document.querySelector('.calendar-month');
//let years = document.querySelector('.calendar-year');
//let prev = document.querySelector('.calendar-prev');
//let next = document.querySelector('.calendar-next');
//let now = new Date();

//let date = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
//let days = now.getDate();
//let arr = [];
//let year = now.getFullYear();
//let numberMonth = now.getMonth();
//console.log(numberMonth)

//let arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

//let k = 1;
//let j = -1;
//let counter = numberMonth;

//prev.addEventListener('click', function () {
//    let dateNext = new Date(now.getFullYear(), now.getMonth() - j, 0).getDate();
//    j--;
//    counter--;
//    if (counter < 0) {
//        counter = 11;
//    }
//    console.log(counter)
//    arrMonth.forEach((month, index) => {
//        if (counter == index) {
//            months.innerHTML = month;
//            years.innerHTML = year;
//        } 
//    })
    
//    calendar.innerHTML = '';
//    numberDays(dateNext);
//})

//arrMonth.forEach((month, index) => {
//    if (counter == index) {
//        months.innerHTML = month;
//        years.innerHTML = year;
//    }
//})

//for (let i = 1; i <= date; i++) {
//    let calendarDay = document.createElement('li');
//    if (i == days) {
//        calendarDay.classList.add('active');
//    }
//    calendarDay.textContent = i;
//    calendar.append(calendarDay);
//}

//next.addEventListener('click', function () {
//    let dateNext = new Date(now.getFullYear(), now.getMonth() + k, 0).getDate();
//    console.log(dateNext)
//    k++;
//    counter++;
//    console.log(counter)
//    arrMonth.forEach((month, index) => {
//        if (counter > 11) {
//            counter = 0
//            if (counter == index) {
//                months.innerHTML = month;
//                years.innerHTML = year + 1;
//            }
//        }
//        if (counter == index) {
//            months.innerHTML = month;
//            years.innerHTML = year;
            
//        }
//    })
//    calendar.innerHTML = '';
//    numberDays(dateNext);
//}) 

//function numberDays(date) {
//    let calendarDay;
//    for (let i = 1; i <= date; i++) {
//        calendarDay = document.createElement('li');
//        if (i == days) {
//            calendarDay.classList.add('active');
//        }
//        calendarDay.textContent = i;
//        calendar.append(calendarDay);
//    }
//}



// Поиск тегов на JavaScript ⊗jsPrStTS

// №1

// 1. 