// 로그인 인풋값에 값이 있을시 색상 변환
    const idInput = document.getElementById('idInput');
    const pwInput = document.getElementById('pwInput');
    const loginBtn = document.getElementsByClassName('loginGo')[0];

    // 로그인 버튼 클릭 이벤트 & 유효성 검사 이벤트
    function loginBtnClick() {
        if (idInput.value === "buzzi_nyang" && pwInput.value === "1234") {
            location.replace("./main.html");
        } else if(idInput.value.length == 0 && pwInput.value.length == 0) {
            alert("id와 pw 번호를 입력해 주세요.");
        } else if (idInput.value.length <= 5 && pwInput.value.length <=5) {
            alert("id와 pw 길이가 짧습니다. 다시 한 번 확인해 주세요.");
        } else {
            alert("캣스타그램 계정 주인만 로그인 할 수 있습니다.");
        }
    }

    // id, pw 입력값에 따른 버튼 활성화 메서드
    function inputKeyboardEvent() {
        // id값과 pw값이 있으면 버튼 활성화
        if (idInput.value.length > 0 && pwInput.value.length > 0) {
            loginBtn.style.backgroundColor = "#0095f6";
        }
        // id값은 없지만, pw값이 있으면 버튼 비활성화
        if (idInput.value.length == 0 && pwInput.value.length > 0) {
            loginBtn.style.backgroundColor = "#b9def7";
        }
        // id값은 있지만, pw값이 없으면 버튼 비활성화
        if (idInput.value.length > 0 && pwInput.value.length == 0) {
            loginBtn.style.backgroundColor = "#b9def7";
        }
        
    }

    // 비밀번호 잊으셨나요 버튼 클릭시 메서드 
    function phoneNumberCheck() {
        alert("잘 떠올려 보세요! 계정 주인만 가입할 수 있습니다!");
    }

    idInput.addEventListener('keyup', inputKeyboardEvent);
    pwInput.addEventListener('keyup', inputKeyboardEvent);
    loginBtn.addEventListener('click', loginBtnClick);
    document.addEventListener('keyup', (e) => {
        if (`${e.key}` == 'Enter') {
            loginBtnClick();
        }
    }) // enter 입력시 loginBtnClick() 호출


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