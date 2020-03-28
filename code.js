import ItenDeal from "./ItemDeal";

var img = document.getElementById('img');
var images = ['img/monster1.svg', 'img/monster2.svg', 'img/monster3.svg', 'img/monster.svg', 'img/monster4.svg'];
var x = 0;

function anim() {
    if( x<images.length ) {
        x = x + 1;
    } else {
        x = 1;
    }
    img.innerHTML = "<img src ="+images[x-1]+">";
}

setInterval(anim, 1500);






const motiv_arr = ["все победы начинаются с победы над самим собой", "just do it", "все победы начинаются с webpack", "делу время, потехе час"];
const ImportantArr = ['has-text-danger', 'has-text-warning', 'has-text-success'];
const backgroundColor = ['has-background-danger', 'has-background-info', 'has-background-primary'];
const MonthArray = ['Февраль','Январь','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

const add_button = document.querySelector(".button-plus");
const input = document.querySelector("input");
const root = document.getElementById("root");
const select = document.querySelector("select");



function getRand(arr){
    // хорошо бы модифицировать в уникальный рандом
    let rand_num = Math.round(Math.random() * arr.length-1);
    let mod_num = Math.abs(rand_num);
    return mod_num;
}

function changePhrase(){
    document.querySelector("q").innerHTML = motiv_arr[getRand(motiv_arr)];
    // добавить сда анимации, с которой эта цитата появляется
}
setInterval(changePhrase, 2000);

function createItem(){
    let text = input.value;
    if(text == ''){
        return; // return обрывает всю работу нашей функции
    }
    root.insertAdjacentHTML('afterBegin', `<div class="wrap-task field is-grouped">
    <button class="button is-medium is-fullwidth ${backgroundColor[select.value-1]}">${text}</button>
    <button class=" btn-delete button is-danger is-medium is-outlined">
        <span>Delete</span>
        <span class="icon is-small">
            <i class="fa fa-times"></i>
        </span>
    </button>
</div>`);
    input.value = '';
}
add_button.addEventListener("click", createItem);

input.addEventListener("keypress", (e) => {
    if(e.keyCode == 13) {
        createItem()
    }
})

root.addEventListener("click", (e) => {
    if(e.target.className == "fa fa-times"){
        var btn = e.target;
    }
    setTimeout(() => {
        btn.parentNode.parentNode.parentNode.remove();
    }, 300)
})


function ChangeColorEl(el) {
    switch (el.value) {
        case '1':
            el.className = backgroundColor[el.value-1];
            break;
        case '2':
            el.className = backgroundColor[el.value-1];
            break;
        case '3':
            el.className = backgroundColor[el.value-1];
            break;
    
        default:
            break;
    }
    el.classList.add("has-text-white");
}

window.onload = () => {
    ChangeColorEl(select);
}

select.onchange = () => {
    ChangeColorEl(select);
}