
let id = localStorage.getItem('loggedInUser');

function getuser(userid) {
    return Per_Data.find(user => user.id === userid);
}

let usercheck = getuser(id);
if (usercheck) {
    document.getElementById('user').innerText = `Mr. ${usercheck.name}`;
    document.getElementById('user_name').placeholder = usercheck.name;

    let maskedAcc = usercheck.Account_No.replace(/^(\d{8})/, 'XXXXXXXX');
    document.getElementById('user_Account').placeholder = maskedAcc;
}
document.getElementById('trans_Ac').addEventListener('input', function () {
    let tr_Ac = this.value.trim();
    let receiver = Per_Data.find(user => user.Account_No === tr_Ac);
    let resive = document.getElementById('Resive_name');
    resive.placeholder = receiver ? receiver.name : "No Match found";
});
document.getElementById('js_confirm').addEventListener('click', () => {
    let sender = getuser(id);
    let trans_Ac = document.getElementById('trans_Ac').value.trim();
    let receiver = Per_Data.find(user => user.Account_No === trans_Ac);
    let tr_amount = parseFloat(document.getElementById('js_amount').value);
    let pin = document.getElementById('js_mpin').value.trim();

    if (!receiver) {
        alert('The Account number not found.');
        return;
    }
    if (isNaN(tr_amount) || tr_amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    if (pin !== sender.MPIN) {
        alert('Enter correct MPIN.');
        return;
    }
    if (sender.amount < tr_amount) {
        alert('Insufficient balance!');
        return;
    }
    sender.amount -= tr_amount;
    receiver.amount += tr_amount;
    localStorage.setItem('Data', JSON.stringify(sender.amount));
    alert(`Successfully transferred ₹${tr_amount} to ${receiver.name}. New Balance: ₹${sender.amount}`);
    window.location.href = "../HTML/home.html";
});
