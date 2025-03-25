let data = [
    { id: 'sabarigiri1007@gmail.com', password: '1072004@', mobile: '9025382951' },
    { id: 'abi123@gmail.com', password: '1072003@', mobile: '9025382950' },
    { id: 'sabarigiri2004@hotmail.com', password: '1072025@', mobile: '9025382949' }
];

let AddData = [
    {
        name: 'SABARIGIRI M',
        Account_No: '1217155000676623',
        CIF: '211008052',
        IFSC: 'BEDB00712',
        Country: 'India',
        MPIN: '135791',
        Mobile_Number: '9025382951',
    },
    {
        name: 'Abi M',
        Account_No: '1217155000656655',
        CIF: '211008052',
        IFSC: 'BEDB00712',
        Country: 'India',
        MPIN: '975319',
        Mobile_Number: '9025382950',
    }
];

let Per_Data = data
    .map(user => {
        let additionalInfo = AddData.find(add => add.Mobile_Number === user.mobile);
        return additionalInfo ? { ...user, ...additionalInfo, amount: 2000 } : null;
    })
    .filter(user => user !== null);

console.log(Per_Data);
