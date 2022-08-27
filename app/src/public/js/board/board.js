'use strict';

const board = document.querySelector('#board');
const btnBoard = document.querySelector('#btnBoard');

btnBoard.addEventListener('click', boardWriteEvent);

// input label click
function boardWriteEvent() {
  if (!board.value) return alert('내용을 입력해 주세요');
  fetchEvent();
}

// input enter key
function boardWriteEventEnder(e) {
  if (!board.value) return alert('내용을 입력해 주세요');
  if (e.keyCode == 13) fetchEvent();
}

function fetchEvent() {
  const req = {
    board: board.value
  };

  fetch('/board', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    valueInit();
  })
  .catch(console.log);
}

// 아무말 json 받아오기
let startShowingMessage = setInterval(async () => {
  await fetch('http://localhost:3000/boardList')
    .then((response) => response.json()) 
    .then((json) => {
      viewBoardList(json)
    })
    .catch(console.log);
}, 1);


let viewBoardList = (boardList) => {

  const BOARD_WRAP = document.querySelector('.board-list');
  if (BOARD_WRAP) {
    let board_list = BOARD_WRAP.querySelectorAll('li');

    // 최초 접속
    if (board_list.length == 0) {
      let HTML = '';
      boardList.description.map(item => {
        HTML += `<li>${item}</li>`;
        BOARD_WRAP.innerHTML = HTML;
      });
    }

    // 접속 이후
    if (board_list.length > 0) {
      if (boardList.description.length != board_list.length) {
        console.log('다름');

        for (let i = 0; i < board_list.length; i++) {
          board_list[i].remove();
        }

        let HTML = '';
        boardList.description.map(item => {
          HTML += `<li>${item}</li>`;
          BOARD_WRAP.innerHTML = HTML;
        });
      }
    }
  }

// value init
let valueInit = () => board.value = '';
