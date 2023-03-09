// promise একধরনের asynchronous operation, আর এই কারনে fetch একটা asynchronous operation

const getData = new Promise((resolve, reject) => {
    let randomNumber = Math.random() * 10;
    
    if(randomNumber < 5) {
        resolve('promise korlam');
    }
    else {
        reject('chole jao');
    }
})

getData
    .then(data => console.log(data))
    .catch(err => console.log(err))