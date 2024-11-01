const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors:[authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
     authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}


/*async function updateAuthor(courseId){
  const course = await Course.findById(courseId);
  course.author.name = 'Mosh Hamedani';
  course.save();


}
*/
async function addAuthor(courseId,author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId,authorId){
  const course = await Course.findById(courseId);
 
  course.authors.pull({ _id: authorId });
 
  await course.save();
}


removeAuthor('6724bb77977971f81838dbd7', '6724bc791d80819ee3a40767');
/*createCourse('Node Course', 
  [
    new Author({ name: 'Mosh' }),
    new Author({ name: 'Lux' })
  ]);
//updateAuthor('')*/