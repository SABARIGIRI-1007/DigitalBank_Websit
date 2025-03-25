let captchaCode = '';

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('Captcha-text').textContent = captcha;
    return captcha;
}

function validateLogin(event) {
    event.preventDefault();

    let id = document.getElementById('mailid').value.trim();
    let password = document.getElementById('pass').value.trim();
    const userCaptcha = document.getElementById('input-captcha').value.trim();
    const error = document.getElementById('errorMessage');
    const isValidUser = data.some(info => info.id === id && info.password === password);
    const ischeck=data.find(val=> val.id ===id);
    if(!ischeck){
        error.style.color = 'red';
        error.textContent = 'incorrect id';
        return;
    }
    if(ischeck.password != password){
        error.style.color = 'red';
        error.textContent = 'incorrect password';
        return;
    }

    if (userCaptcha !== captchaCode) {
        error.style.color = 'red';
        error.textContent = 'Incorrect captcha, try again!';
        captchaCode = generateCaptcha();
        document.getElementById('input-captcha').value = '';
        return;
    }
    if (!isValidUser) {
        error.style.color = 'red';
        error.textContent = 'incorrect id and password';
        return;
    }
    console.log(Per_Data);
    const isadd=Per_Data.find(no=> no.id===id );
    error.style.color = 'green';
    error.textContent = 'Logging in...';
    setTimeout(() => {
        if(isadd){
            let me=localStorage.setItem('loggedInUser',id);
            window.location.href="../HTML/home.html";
           
        }
        else{
            confirm('you not add the Account so you can add the account');
            window.location.href="../HTML/ADDACCOUNT.html";
        }
    }, 1000);


}

document.getElementById('loginform').addEventListener('submit', validateLogin);
document.getElementById('refresh-captcha').addEventListener('click', () => {
    captchaCode = generateCaptcha();
});
captchaCode = generateCaptcha();
