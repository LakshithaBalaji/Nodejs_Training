const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=> console.log('Connected to MongoDB..'))
.catch(err =>  console.error('Could not connect',err));


const courseSchema = new mongoose.Schema({
    name:{type:String,required:true,minlength:5,maxlength:255,},
    category:{
        type:String,
        required:true,
        enum:['web','mobile','network'],
        lowercase:true
    },
    author:String,
    tags:{
        type:Array,
        validate: {
            validator: async function(v) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const result = v && v.length > 0;
                        resolve(result);
                    }, 4000);
                });
            },
            message: 'A course should have at least one tag.'
        }
    },
    date:{ type : Date,default : Date.now},
    isPublished: Boolean,
    price:{
        type:Number,
        required: function(){
            return this.isPublished;},
            min:10,
            max:200,
            get:v =>Math.round(v),
            set: v=>Math.round(v)

        }
});

const Course = mongoose.model('Course',courseSchema);
async function createCourse(){
    const course=new Course({
        name:'React Course',
        category:'Web',
        author: 'Roshu',
        tags:['frontend'],
        isPublished: true,
        price:15.9
    });
  try{  
 const result = await course.save();
 console.log(result);}
 catch(ex){
    for(a in ex.errors){
        console.log(ex.errors[a]);
    }
 }
}

async function getCourse(){

    const pageNumber=2;
    const pageSize=10;
const courses=await Course
.find({author : 'Mosh', isPublished:true,name:'Angular Course'})
//.find({price: {$in:[10,15,20]}})
//.find()
//.or([{name:'Angular Course'},{isPublished:true}])
.skip((pageNumber - 1)* pageSize)
.limit(10)
.sort({name:1})
.select({name : 1});
//.countDocuments();
console.log(courses);
}

async function updateCourse1(id) {

    const course=await Course.findById(id);
    if(!course) return;
    course.isPublished=true;
    course.author='lakshi';

    const result= await course.save();
    console.log(result);
}



async function updateCourse(id) {

    const result=await Course.findByIdAndUpdate(id,{
        $set:{
            author:'laks',
            isPublished:false
        }
    }, {new :true});
    
    console.log(result);
}



async function removeCourse(id) {

    const result=await Course.findByIdAndRemove(id)
     
    
    console.log(result);
}

//removeCourse('6721df506e8fd93c8acae649');

createCourse();