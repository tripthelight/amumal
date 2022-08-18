'use strict';

const id = document.querySelector('#id');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const registerBtn = document.querySelector('#button');

registerBtn.addEventListener('click', register);

function register() {

  if (!id.value) return console.log('아이디를 입력해 주세요');
  if (password.value !== confirmPassword.value) return console.log('비밀번호가 일치하지 않습니다.');

  const req = {
    id: id.value,
    name: name.value,
    password: password.value
  };

  console.log(req);

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = '/login';
    } else {
      console.log(res.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  })
}
