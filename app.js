let express=require('express');
let mongoose=require('mongoose');
let schools=require('./routers/schools');
let students=require('./routers/students');


let app=express();
app.use(express.json());

let url="mongodb://localhost:27017/week8tute1";

mongoose.connect(url,function(err){
    if(err)
    console.log(err);
    
});

// schools
app.get('/schools',schools.getAllSchools);
app.post('/schools',schools.addNewSchool);
// app.put('/schools',schools.updateSchool);
app.post('/schools/addStudent',schools.addNewStudent);


app.get('/students',students.getAllStudents);
app.post('/students',students.addNewStudent);

app.listen(8080);

