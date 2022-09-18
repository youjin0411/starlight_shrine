function sliderOn () {
 const slides = document.querySelector('.slides'); // 슬라이드뼈대 감지
 const Content = document.querySelector('.Thumbnail'); //썸네일 뼈대 감지
 const item = slides.getElementsByClassName('slide_item'); // 슬라이드 아이템 획득
 const thumbnail = Content.getElementsByClassName('thumbnail_item'); //썸네일 아이템 획득
 
 const firstEle = item[0]; // 첫번째 슬라이드 아이템
 const firstThumb = thumbnail[0]; // 첫번째 썸네일 아이템
 firstEle.classList.add('ontheSlide'); //첫번째 슬라이드 아이템에 ontheSlide 클래스 추가
  firstThumb.classList.add('ontheThumbnail'); // 첫번째 썸네일 아이템에 ontheThumbnail 클래스 추가
  const gogogo = setInterval(sliderGo, 4000); // 4초마다 함수 sliderGo 함수 발동시키기
 function sliderGo () {
        
    const currentItem = document.querySelector('.ontheSlide'); // 현재 활성화된 슬라이드 아이템 감지
    const currentThumb = document.querySelector('.ontheThumbnail'); // 현재 활성화된 썸네일 아이템 감지
    currentItem.classList.remove('ontheSlide') //현재 활성화된 슬라이드 아이템 비활성화
    currentThumb.classList.remove('ontheThumbnail') // 현재 활성화된 썸네일 아이템 비활성화

  if (!currentItem.nextElementSibling) { // 만약 마지막 슬라이드 아이템이라면
      item[0].classList.add('ontheSlide') //첫번째 아이템을 활성화
      thumbnail[0].classList.add('ontheThumbnail') // 첫번째 썸네일을 활성화
    }   
   else { // 그 외의 경우
     currentItem.nextElementSibling.classList.add('ontheSlide') //다음 엘리먼트를 활성화
     currentThumb.nextElementSibling.classList.add('ontheThumbnail') //다음 썸네일을 활성화
        }   
    
  }
}
sliderOn();