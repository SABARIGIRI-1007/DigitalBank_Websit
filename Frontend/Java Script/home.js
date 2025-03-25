
function getuser(userid) {
    return Per_Data.find(user => user.id === userid);
}

let id = localStorage.getItem('loggedInUser');
let Data=localStorage.getItem('Data');
if (id) {
    const usercheck = data.find(val => val.id === id);  
    if (usercheck) {
        let userdata = getuser(usercheck.id);
        if (userdata) {
            document.getElementById('user').innerHTML = `Mr. ${userdata.name}`;
            if(Data){
            document.getElementById('amount').innerHTML=Data;
            }
        }
    }
}


let money = [{
    saving: '2000',
    deposit: '0',
    current: '2000',
    loan: '0'
}];

function showTransactions() {
    let transactions = [
        { postDate: "30/06/2020", valueDate: "30/06/2020", debit: "-", credit: "10.00", balance: "1251.00 CR" },
        { postDate: "31/03/2020", valueDate: "31/03/2020", debit: "-", credit: "11.00", balance: "1241.00 CR" },
        { postDate: "22/01/2020", valueDate: "22/01/2020", debit: "177.00", credit: "-", balance: "1230.00 CR" },
        { postDate: "31/12/2019", valueDate: "31/12/2019", debit: "-", credit: "12.00", balance: "1407.00 CR" },
        { postDate: "23/12/2019", valueDate: "23/12/2019", debit: "-", credit: "15.00", balance: "1395.00 CR" }
    ];

    let tableBody = document.querySelector("#transactionTable tbody");
    tableBody.innerHTML = ""; 
    transactions.forEach(tx => {
        let row = `<tr>
            <td>${tx.postDate}</td>
            <td>${tx.valueDate}</td>
            <td>${tx.debit}</td>
            <td>${tx.credit}</td>
            <td>${tx.balance}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    document.getElementById('bt').style.display = 'none';
}

document.getElementById('Statement').addEventListener('click', () => {
    showTransactions();
    document.getElementById('bt').style.display = 'block';
});

document.getElementById('bt').addEventListener('click', () => {
    window.print();
});
