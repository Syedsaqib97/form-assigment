const username = document.querySelector('#username')
const logOutBtn = document.querySelector('#logoutbtn')

//browser user name
username.innerHTML = JSON.parse(localStorage.getItem('loggedInUser')).name

//LogOut Function
logOutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('loggedInUser')

     // change the location of window
     setTimeout(() => {
        window.location.href = "../login/login.html"
    }, 3000);
})


let editBtn = document.querySelector('#editBtn')
const mainDiv = document.querySelector('.main')
const editProfile = document.querySelector('.editProfile')
console.log(mainDiv , editProfile);

function edithandler(){
    mainDiv.style.display = 'none';
    editProfile.style.display = 'block';

    // Set the input values based on the stored user information
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let numberInput = document.querySelector('#number');
    let nationalityInput = document.querySelector('#nationality');

    if (nameInput && emailInput && numberInput && nationalityInput) {
        let getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
        nameInput.value = getLoggedInUser.name;
        emailInput.value = getLoggedInUser.email;
        numberInput.value = getLoggedInUser.number
        nationalityInput.value = getLoggedInUser.nationality
    } else {
        console.error("Some input elements are missing or have incorrect IDs.");
    }
}
