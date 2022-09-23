// show/hide menu: toggle(on/off반복) menu
const toggleMenu = (toggleId, navListId) => {
    //html -> js 가져옴
    const toggle = document.getElementById(toggleId); 
    const navList = document.getElementById(navListId); 
    const toggleIcon = toggle.getElementsByTagName("i")[0];
    
    if(toggle && navList) {
        // toggle click 
        toggle.addEventListener('click', () => {
            // show/hide menu : .show-menu -> 함수를 한 번만 사용함으로
            navList.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x 
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-x-square");
        });
    }
}
toggleMenu("nav-toggle", "nav-list");

"use strict";
const content = "방문후기를 작성 해 주세요!"
const text = document.querySelector(".text")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(3000);
    }
}
setInterval(typing, 200)



var recordbtn = document.querySelector(".recordbtn");
var recordData = document.querySelector(".recordData");
var todolist = document.querySelector(".todolist");


function localCheck() {
  if (localStorage.getItem("todolist") == null) {
    localStorage.setItem("todolist", "[]");
  }
}
localCheck();


function dataUpdate() {
  var dataLocal = localStorage.getItem("todolist");
  var dataLocalAry = JSON.parse(dataLocal);

  var dataLen = dataLocalAry.length;
  var str = "";
  for (i = 0; i < dataLen; i++) {
    str +=
      '<li class="list-group-item d-flex"><span>' +
      dataLocalAry[i] +
      '</span><button data-num="' +
      i +
      '" type="button" class="btn btn-outline-secondary ml-auto border-0 btnCancel">X</button></li>';
  }
  todolist.innerHTML = str;
}


dataUpdate();


function dataSave(e) {
  var dataLocal = localStorage.getItem("todolist");
  var dataLocalAry = JSON.parse(dataLocal);
  dataLocalAry.push(recordData.value);
  var dataLocalStr = JSON.stringify(dataLocalAry);
  localStorage.setItem("todolist", dataLocalStr);
  dataUpdate();
  recordData.value = "";
}
recordbtn.addEventListener("click", dataSave, false);


// var btnCancel = document.querySelector(".btnCancel");
function dataCancel(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  var num = e.target.dataset.num;
  var dataLocal = localStorage.getItem("todolist");
  var dataLocalAry = JSON.parse(dataLocal);
  dataLocalAry.splice(num, 1);
  localStorage.setItem("todolist", JSON.stringify(dataLocalAry));
  dataUpdate();
}

todolist.addEventListener("click", dataCancel, false);

function newPage()  {
  location.href = 'review.html'
}