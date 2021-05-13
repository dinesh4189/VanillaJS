{
    console.log('1 -> simple promise');
    let newPromiseRresolver = new Promise((resolve, reject) => {
       let doing = true;
       //console.log(arguments);
       if (doing) {
            resolve({result: '1. your task is done.'});
       } else {
            reject({error: '1. your task is not done.'});
       }

    });
    
    newPromiseRresolver.then(({result})=>{
        console.log(result);
    }).catch(({error})=>{
        console.log(error);
    });

}

{
    console.log('2 -> how to pass arguments in promise');
    

    let checkLogin = (userName, password) => {

        return new Promise((resolve, reject) => {
           
           if (userName=='dinesh' && password=='123456') {
                resolve({result: '2. Logged successfully.'});
           } else {
                reject({error: '2. Enter correct user name and password.'});
           }

        });

    }

    let userName = 'dinesh';
    let password = '123456';
    
    checkLogin(userName, password).then(({result})=>{
        console.log(result);
    }).catch(({error}) => {
        console.log(error);
    });
}

{
    console.log('3 -> This is dependent promise chain');

    let cleanRoom = function() {
      return new Promise(function(resolve, reject) {
        resolve('Cleaned The Room');
      });
    };

    let removeGarbage = function(message) {
      return new Promise(function(resolve, reject) {
        resolve(message + ' remove Garbage');
      });
    };

    let winIcecream = function(message) {
      return new Promise(function(resolve, reject) {
        resolve( message + ' won Icecream');
      });
    };

    cleanRoom().then(function(result){
        return removeGarbage(result);
    }).then(function(result){
        return winIcecream(result);
    }).then(function(result){
        console.log('3. finished ' + result);
    })
}
