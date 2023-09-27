const MAIN_TITLE = '안녕하세요. 저는 최혜결입니다.';
const TITLE_TEXT = $('.titleText')[0];
// const TITLE_TEXT = document.querySelector('.titleText');

// 메인화면 mainTitle 타이핑 효과
let i = 0;
function titleTying() {
  let txt = MAIN_TITLE[i++];
  TITLE_TEXT.innerHTML += txt;
  if (i > MAIN_TITLE.length) {
    TITLE_TEXT.textContent = "";
    i = 0;
  }
}
TITLE_TEXT.innerHTML = "";
setInterval(titleTying, 200);

// 메인화면 mainBtn 마우스 오버시 화살표 방향 바뀜
$('#mainBtn').on('mouseover', function () {
  $('#mainBtn i').removeClass('fa-arrow-right');
  $('#mainBtn i').addClass('fa-arrow-down');
});
$('#mainBtn').on('mouseout', function () {
  $('#mainBtn i').removeClass('fa-arrow-down');
  $('#mainBtn i').addClass('fa-arrow-right');
});
// 메인화면 mainBtn 클릭시 본문 내용으로 이동
var content = $()
$('#mainBtn').on('click', function (e) {
  var aboutTop = $('#about').offset().top;
  console.log(aboutTop);
  window.scrollTo(0, aboutTop);
});
// 프로젝트 부분 카드 뒤집기
$(".cards").on('mouseover', function () {
  $(".cardRotate").addClass("backRotate").removeClass("cardRotate");
  $(this).addClass("cardRotate").removeClass("backRotate");
});
// contact 부분
$('#sendBtn').click(function() {
			
  var userEmail = $('#sendEmail');
  var userTitle = $('#sendTitle');
  var userContent = $('#sendContent');
  
  if(userEmail.val() == ''){
    alert('이메일을 입력해주세요.')
    userEmail.focus();
    return;
  }
  if(userTitle.val() == ''){
    alert('제목을 작성해주세요.')
    userTitle.focus();
    return;
  }if(userContent.val() == ''){
    alert('내용을 작성해주세요.')
    userContent.focus();
    return;
  }
  $('#sendBtn').submit();
});

// 제일 위로 올라가는 버튼
$('#moveToTop').on('click', function(){
  window.scrollTo(0, 0);
})