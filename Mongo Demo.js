const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log('Connected to MongoDb..'))
.catch(err =>console.error('Could not coonect to mongo'))

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{  type:Date,default:Date.now},
    isPublished:Boolean
});