function getAnswer() { //답확인
  if (question.answer.value == right) {
    alert("정답입니다.");
    document.getElementById("next").style.display = "block";
    document.getElementById("ques").style.display = "none";
  } else {
    alert("오답입니다...");
  }
}
function keyPress(e) { //엔터키 입력의 경우 정답 확인
  if (e.which == 13 || e.keyCode == 13) {
    getAnswer();
  }
}
