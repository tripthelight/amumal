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
