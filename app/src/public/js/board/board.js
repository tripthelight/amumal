'use strict';

const board = document.querySelector('#board');
const btnBoard = document.querySelector('#btnBoard');

btnBoard.addEventListener('click', boardWriteEvent);

function boardWriteEvent() {

  if (!board.value) return alert('내용을 입력해 주세요');

  const req = {
    board: board.value
  };

  console.log('req : ',req);

  fetch('/board', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      //
    } else {
      console.log(res.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  })
}

// 아무말 json 받아오기
// fetch('http://localhost:3000/boardList')
//   .then((response) => response.json()) 
//   .then((json) => {
//     viewBoardList(json);
//   });


startShowingMessage();
async function startShowingMessage(){
  // setInterval(async function(){
    await fetch('http://localhost:3000/boardList')
      .then((response) => response.json()) 
      .then((json) => {
        viewBoardList(json)
      })
      .catch((error) => {console.log(error);});
  // }, 1000);
}

let viewBoardList = (boardList) => {
  let HTML = '';
  const BOARD_LIST = document.querySelector('.board-list');
  if (BOARD_LIST) {
    boardList.description.map(item => {
      HTML += `<li>${item}</li>`;
      BOARD_LIST.innerHTML = HTML;
    });
  }
}
