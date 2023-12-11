
let usernameInput = document.getElementById('usernameInput')
let userEmailInput = document.getElementById('userEmailInput')
let userPasswordInput = document.getElementById('userPasswordInput')

let userInfo = []
if (localStorage.getItem('userInfo')) {
    userInfo = JSON.parse(localStorage.getItem('userInfo'))
}

function signUp() {
    if (validationName() && validationEmail() && validationPassword()) {
        let user = {
            name: usernameInput.value,
            email: userEmailInput.value,
            password: userPasswordInput.value,
        }
        userInfo.push(user)
        console.log(userInfo);
        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        let suc = document.getElementById('confirmMsg')
        suc.classList.replace('d-none', 'd-block')
        setTimeout(() => {
            location.href = './index.html'
        }, 2000);
    } else {
        // document.getElementById( 'tryAgainMsg' ).classList.replace( 'd-none' , 'd-block' )
    }

}

function validationName() {
    if (!usernameInput.value) {
        document.getElementById('usernameAlert').classList.replace('d-none', 'd-block')
        return false
    }
    else {
        document.getElementById('usernameAlert').classList.replace('d-block', 'd-none')
        return true
    }
}

function validationEmail() {
    if (!userEmailInput.value) {
        document.getElementById('userEmailAlert').classList.replace('d-none', 'd-block')
        return false
    }
    else {
        document.getElementById('userEmailAlert').classList.replace('d-block', 'd-none')
        return true
    }
}

function validationPassword() {
    if (!userPasswordInput.value) {
        document.getElementById('userPasswordAlert').classList.replace('d-none', 'd-block')
        return false
    }
    else {
        document.getElementById('userPasswordAlert').classList.replace('d-block', 'd-none')
        return true
    }
}

function login() {
    let loginEmail = document.getElementById('loginEmail')
    let loginPassword = document.getElementById('loginPassword')
    if (loginEmail.value == '' || loginPassword.value == '') {
        document.getElementById('fillMsg').classList.replace('d-none', 'd-block')
    }
    for (let i = 0; i < userInfo.length; i++) {
        if (userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() &&
            userInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()) {
            localStorage.setItem('userName', userInfo[i].name)
            setTimeout(() => {
                location.href = './welcome.html'
            }, 2000);
        }
        else {
            document.getElementById('wrongMsg').classList.replace('d-none', 'd-block')
        }
    }
}

let userNameStorge = localStorage.getItem('userName')

function displayWelcomeUser() {
    document.getElementById('username').innerHTML = ` Welcome ${userNameStorge} `
}

function logout() {
    localStorage.removeItem('userName')
}


