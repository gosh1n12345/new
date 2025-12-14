"use strict";
let count = 0;
let count1 = 0;
dan.addEventListener("click", function(){
    let a = firstname_field.value;
    let b = lastname_field.value;
    let c = b + " " + a[0] + ".";
    let d = phone_field.value;
    imfa.innerHTML = "Уважаемый(-ая), " + c;
    nom.innerHTML = d;
    block.classList.remove("invisible");
    block.classList.add("vis");
})
document.addEventListener("scroll", function(){
    if (window.pageYOffset < 400){
        nabs.classList.add("active");
        about.classList.remove("active");
        zaia.classList.remove("active");
        kom.classList.remove("active");
    } else if (window.pageYOffset < 820){
        nabs.classList.remove("active");
        about.classList.add("active");
        zaia.classList.remove("active");
        kom.classList.remove("active");
    } else if (window.pageYOffset < 1450){
        nabs.classList.remove("active");
        about.classList.remove("active");
        zaia.classList.add("active");
        kom.classList.remove("active");
    } else{
        nabs.classList.remove("active");
        about.classList.remove("active");
        zaia.classList.remove("active");
        kom.classList.add("active");
    }
    let w = window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100;
    if (w >= 98){
        scrol.style.backgroundColor = "green";
    } else{
        scrol.style.backgroundColor = "red";
    }
    document.querySelector("#scrol").style.width = w + "%";
    if ((window.pageYOffset) > window.innerHeight/2) {
        document.body.querySelector("footer").classList.add("vis");
    } else{
        document.body.querySelector("footer").classList.remove("vis");
    }
    if ((window.pageYOffset) >= (window.innerHeight/2)){
        sect.appendChild(prods);
    }
})
kryt.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})
nabs.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})
about.addEventListener("click", function(){
    window.scrollTo({top: 400, behavior: 'smooth'});
})
zaia.addEventListener("click", function(){
    window.scrollTo({top: 900, behavior: 'smooth'});
})
kom.addEventListener("click", function(){
    window.scrollTo({top: 1550, behavior: 'smooth'});
})
cartbut1.addEventListener("click", function(){
    count += 1;
    schet.innerHTML = count;
})
cartbut2.addEventListener("click", function(){
    count += 1;
    schet.innerHTML = count;
})
cartbut3.addEventListener("click", function(){
    count += 1;
    schet.innerHTML = count;
})
cartbut4.addEventListener("click", function(){
    count += 1;
    schet.innerHTML = count;
})
cartbut5.addEventListener("click", function(){
    count += 1;
    schet.innerHTML = count;
})
cartbut6.addEventListener("click", function(){
    count += 1;
    schet.innerHTML = count;
})
window.addEventListener("scroll", function(){
    let block = document.getElementById('prods');
    if((window.pageYOffset) > window.innerHeight) {
        block.innerHTML = block.innerHTML + "Тут могла быть ваша реклама\n";
    }
});
r.addEventListener("click", function(){
    if (count == 0){
        count += 1;
        imgA.src = "img/series/series2.jpg";
        naz.innerHTML = "Звездные войны! (Опять)";
        opic.innerHTML = "А вы на стороне ситхов? Джедаев? А может у вас нету времени смотреть это потому что горите по дедлайнам? Маска Дарт Вейдера вам в помощь...";
    }
    else if (count == 1){
        count += 1;
        imgA.src = "img/series/series3.jpg";
        naz.innerHTML = "Лего Ниндзяго😎";
        opic.innerHTML = "Прикиньте, его до сих пор выпускают... а было время...";
    }
    else if (count == 2){
        count = 3;
        imgA.src = "img/series/series5.jpg";
        naz.innerHTML = "Лего Текник";
        opic.innerHTML = "Я у мамы инженер, программист, гений, легенда, миллиардер, а ещё взял 5к рублей, чтобы купить машинку, которую запрограммировал в скретче❤️❤️";
    }
    else if (count == 3){
        count = 0;
        imgA.src = "img/series/series1.jpg";
        naz.innerHTML = "THE LEGO MOVIE";
        opic.innerHTML = "Познакомься с наборами из серии THE LEGO® MOVIE 2™, посмотри, как Эммет разворачивает свой новый дом мечты/спасательную ракету, когда Мими Катавасия прибывает на звездолёте.";
    }
})
l.addEventListener("click", function(){
    if (count == 1){
        count -= 1;
        imgA.src = "img/series/series1.jpg";
        naz.innerHTML = "THE LEGO MOVIE";
        opic.innerHTML = "Познакомься с наборами из серии THE LEGO® MOVIE 2™, посмотри, как Эммет разворачивает свой новый дом мечты/спасательную ракету, когда Мими Катавасия прибывает на звездолёте.";
    }
    else if (count == 2){
        count -= 1;
        imgA.src = "img/series/series2.jpg";
        naz.innerHTML = "Звездные войны! (Опять)";
        opic.innerHTML = "А вы на стороне ситхов? Джедаев? А может у вас нету времени смотреть это потому что горите по дедлайнам? Маска Дарт Вейдера вам в помощь...";
    }
    else if (count == 0){
        count = 3;
        imgA.src = "img/series/series5.jpg";
        naz.innerHTML = "Лего Текник";
        opic.innerHTML = "Я у мамы инженер, программист, гений, легенда, миллиардер, а ещё взял 5к рублей, чтобы купить машинку, которую запрограммировал в скретче❤️❤️";
    }
    else if(count == 3){
        count = 2;
        imgA.src = "img/series/series3.jpg";
        naz.innerHTML = "Лего Ниндзяго😎";
        opic.innerHTML = "Прикиньте, его до сих пор выпускают... а было время...";
    }
})