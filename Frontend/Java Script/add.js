let AddData = [{
    name: 'SABARIGIRI M',
    Account_No: '12171550006623',
    CIF: '211008052',
    IFSC: 'BEDB00712',
    Country: 'India',
    MPIN:'135791',
    Mobile_Number: '9025382951'
}];

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('js_captcha').textContent = captcha;
    return captcha;
}

let captchaCode = '';

function check(event) {
    event.preventDefault();
    let user = document.getElementById('js_name').value;
    let Ac_No = document.getElementById('js_account_no').value.trim();
    let C_No = document.getElementById('js_Id').value;  
    let IFSC_No = document.getElementById('js_IFSC_no').value;
    let country = document.getElementById('js_country').value;
    let Mpin=document.getElementById('js_mpin').value;
    let M_no = document.getElementById('js_mobile').value;
    let captcha_no = document.getElementById('js_input_captch').value; 

    let isValid = true;
    if (Ac_No.length !== 14) {
        alert('Incorrect Account Number (must be 14 digits)');
        document.getElementById('js_account_no').value = '';
        isValid = false;
    }
    if(Mpin.length !=6){
        alert('To creat a correct Mpin Mpin size six');
        document.getElementById('js_mpin').value='';
        isValid=false;
    }
    if (M_no.length !== 10) {
        alert('Incorrect Mobile Number (must be 10 digits)');
        document.getElementById('js_mobile_no').value = '';
        isValid = false;
    }
    if (captcha_no !== captchaCode) {
        alert('Incorrect Captcha');
        document.getElementById('js_input_captch').value = '';
        captchaCode = generateCaptcha();
        isValid = false;
    }

    if (isValid) {
        let newUser = {
            name: user,
            Account_No: Ac_No,
            CIF: C_No,
            IFSC: IFSC_No,
            MPIN:Mpin,
            Country: country,
            Mobile_Number: M_no
        };

        AddData.push(newUser);
        alert('Login Successfully');
        let jsid=['js_name','js_account_no','js_Id','js_IFSC_no','js_mpin','js_mobile','js_input_captch'];
        jsid.forEach(id1 =>{
            let element=document.getElementById(id1);
            if(element){
                element.value='';
            }
        });
        captchaCode = generateCaptcha();


    }
    console.log(AddData);   
}

document.getElementById('js_form').addEventListener('submit', check);
captchaCode = generateCaptcha();
