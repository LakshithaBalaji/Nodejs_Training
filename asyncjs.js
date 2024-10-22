console.log('Before');
/*getUser(1,(user)=>{
    
    getRepo(user.gitHubUserName,(r)=>{
        
    getCommits(repos,(commit) =>{
        console.log(commits);
    });
    });
});*/
const p= getUser(1);
p
.then(user=> getRepo(user.gitHubUserName))
.then(repos=>getCommit(repos))
.then(commits=>console.log('Commits',commits));

console.log('after');


function getUser(id){
    return new Promise((resolve,reject)=>{

  
    setTimeout(()=>{
        console.log('Reading a user from a database');
        resolve ({id:id,gitHubUserName:'Lakshitha'});
    
    },2000);
});
}
function getRepo(username){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(['repo1','repo2','repo3']);
    },2000);
});
}
function getCommit(repo){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(['commit1','commit2','commit3']);
    },2000);
});
}

