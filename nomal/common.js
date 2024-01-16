// 슬라이드 전체 크기(width 구하기)
const slide = document.querySelector(".sliderE");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
const slideItems = document.querySelectorAll(".img");

// 슬라이드의 최대 갯수를 7개로 설정
let maxSlide = 7;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 0;

// 이전 슬라이드로 이동하는 함수
function nextMove() {
  if (currSlide > 0) { // currSlide가 0보다 클 때만 작동
    currSlide--;
    slideItems.forEach((i, index) => {
      const offset = slideWidth * (index - currSlide);
      i.style.left = `${-offset}px`;
    });
  }
}

// 다음 슬라이드로 이동하는 함수
function prevMove() {
  if (currSlide < maxSlide - 1) { // currSlide가 maxSlide-1보다 작을 때만 작동
    currSlide++;
    slideItems.forEach((i, index) => {
      const offset = slideWidth * (index - currSlide);
      i.style.left = `${-offset}px`;
    });
  }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", prevMove);
nextBtn.addEventListener("click", nextMove);

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 드래그 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// 드래그 시작 이벤트
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 드래그 시작 위치 저장
});

// 드래그 끝 이벤트
slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});
