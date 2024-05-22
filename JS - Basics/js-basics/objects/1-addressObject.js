let address = {
    street: 'Rua 4',
    city: 'Colina',
    zipCode: '14770-000'
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);