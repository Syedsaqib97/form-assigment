let signUpBox = document.querySelector('.signUp-box');
let name = document.querySelector('#userName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cPassword = document.querySelector('#cPassword');
let submit = document.querySelector('#button');
let loader = document.querySelector('.loader');

// console.log();

let getingDataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || [];
let userInfo = getingDataFromLocalStorage;


submit.addEventListener('click', ()=> {
    if(name.value === '' || email.value === ''|| password.value === ''|| cPassword.value === ''){
        alert('Please fill the form completely!')
    }else if(password.value !== cPassword.value){
        alert('Password and confirm password are not equal!');
    }else{let userAlreadyTaken = userInfo.find((user) => {
        return name.value === user.name || email.value === user.email;
    });
    
    if (!userAlreadyTaken) {
        let user = {
          name: name.value,
          email: email.value,
          password: password.value,
          cPassword: cPassword.value,
        };

    userInfo.push(user);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);

      name.value = '';
      email.value = '';
      password.value = '';
      cPassword.value = '';

      setTimeout(() => {
        window.location.href = '../login/login.html';
      }, 3000);
    } else {
      alert('Sorry, this username or email is already taken!');
    }
}
})
