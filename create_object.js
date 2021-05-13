{

    let tp = {
        fname: 'dinesh',
        lname: 'kumar',
        address: {
            address1: 'address1',
            address2: 'address2'
        }
    };

    let newObj = Object.assign({}, tp);

    console.log('shallow copy');

    newObj.fname = 'dk';
    newObj.address.address1 = 'address1 --->';

    console.log(tp);
    console.log(newObj);

}
{
    let tp = {
        fname: 'dinesh',
        lname: 'kumar',
        address: {
            address1: 'address1',
            address2: 'address2'
        }
    };

    let newObj = Object.assign({}, 
        {
            ...tp,
            address: {
                ...tp.address
            }
        }
     );

    console.log('deep copy');

    console.log('method 1');

    newObj.fname = 'dk';
    newObj.address.address1 = 'address1 --->';

    console.log(tp);
    console.log(newObj);

    console.log('method 2');

    let newObj2 = JSON.parse(JSON.stringify(tp));
    newObj2.fname = 'dk';
    newObj2.address.address1 = 'address1 --->';

    console.log(tp);
    console.log(newObj2);

}
