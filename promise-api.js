const p1= new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async 1');
        resolve(1);
    },2000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async 2');
        reject(new Error('rejected'));

    },2000);
});

Promise.race([p1,p2])
.then(result => console.log(result))
.catch(err => console.log('Error',err.message));