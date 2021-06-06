const form = document.querySelector('.signup-form');
const usernameFeedBack = document.querySelector('.usernamefeedBack ');
const passwordfeedBack = document.querySelector('.passwordfeedBack ');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
const passwordPattern = /^.{6,12}$/

form.addEventListener('submit', e => {
  e.preventDefault();

  //  validation
  const username = form.username.value;

  if(usernamePattern.test(username)){
    usernameFeedBack.textContent = 'That username is valid'
  }else{
    usernameFeedBack.textContent = 'username must contain letters only & be between 6 - 12 characters long'
  }

  const password = form.password.value;

  if(passwordPattern.test(password)){
    passwordfeedBack.innerText = 'The password is valid'
  }else{
    passwordfeedBack.innerText  = 'password can contain any character but must be 6- 12 characters long'
  }

});

form.username.addEventListener('keyup',(e) => {
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
  }else{
    form.username.setAttribute('class', 'error');
  }
});

form.password.addEventListener('keyup',(e) => {
  if (passwordPattern.test(e.target.value)) {
    form.password.setAttribute('class', 'success');
  }else{
    form.password.setAttribute('class', 'error');
  }
});



//  testing RegEx
// const username = 'hassan';
// const pattern = /^[a-z]{6,}$/;

//let result = pattern.test(username);

//if(result){
//  console.log('regex test passed :)');
//}else{
//  console.log('regex test failed :(')
//}

// let result = username.search(pattern);
// console.log(result);
