const express=require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello there!!');
});
app.get('/api/courses',(req,res)=>{
res.send( ['10 Natural Numbera',1,2,3,4,5,6,7,8,9,10]);
});
app.listen(3000,()=> {
    console.log('Listening to port 3000');
})

