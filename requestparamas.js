const express=require('express');
const app =express();
app.get('/',(req,res)=>{
    res.send('Hello,World!');
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
});
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
});
app.get('/api/posts/:year/:month',(req,res)=>{
    res.send(req.params);
});
const port=process.env.PORT||3000
app.listen(port,()=> console.log(`Listening to port ${port}`));