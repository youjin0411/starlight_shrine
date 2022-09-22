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


const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.5,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

const boxList = document.querySelectorAll('.tip-item');

// 반복문을 돌려 모든 DOM에 적용
boxList.forEach(el => observer.observe(el));

var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}