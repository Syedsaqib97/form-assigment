const email = document.querySelector('#email')
const password = document.querySelector('#password')

console.log(password);

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(loggedInUser) window.location.href = '../homePage/home.html'


const loginHandler = () =>{
    const user = JSON.parse(localStorage.getItem('userInfo'))
// checking fields
    if(!email.value || !password.value)  return alert('Fields Must Be Field')
// checking lenght
    // if (password.value.length < 8) return alert('password length should be atleast 8 characters')
    
    if (!user) return alert("Sorry no user found")

    const foundUser = user.find(user => {
        if (user.email === email.value) return user
    });
    if (!foundUser) return alert('No user found')

    if (foundUser.password !== password.value) return alert("Invalid Credentials")
    alert("Login Successfully, diverting you to the home page")

    localStorage.setItem('loggedInUser', JSON.stringify(foundUser))

    setTimeout(() => {
        window.location.href = '../homePage/home.html'
    }, 3000)
}





