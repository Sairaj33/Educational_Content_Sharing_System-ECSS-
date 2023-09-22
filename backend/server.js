const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/marksDB", {
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
});

const teacherSchema = new mongoose.Schema({
  userName: String,
  password: String,
  CoursesTaught: [String],
  SubjectTaught: [String],
  Plink: [String],
});

const studentSchema = new mongoose.Schema({
  userName: String,

  password: String,
  course: String,
  subjects: [String],
  Plink: [String],
});

const courseSchema = new mongoose.Schema({
  Course_id: String,
});


const User = mongoose.model("User", userSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);
const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);


app.post("/adminLogin", async (req, res) => {
  User.findOne({ userName: req.body.username })
    .then((admin) => {
      if (admin) {
        if (req.body.password === admin.password) {
          console.log("data sent");
          res.send({ success: "success" });
        } else {
          res.send({ success: "InvalidPassword" });
        }
      } else {
        console.log("Inside not admin");
        res.send({ success: "failure" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/teacherLogin", async (req, res) => {
  console.log(req.body);
  Teacher.findOne({ userName: req.body.username })
    .then((teacher) => {
      if (teacher) {
        if (req.body.password === teacher.password) {
          res.send({ success: "success", data: teacher.userName });
        } else {
          res.send({ success: "InvalidPassword" });
        }
      } else {
        console.log("Inside not teacher");
        res.send({ success: "failure" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/studentLogin", async (req, res) => {
  console.log(req.body);
  Student.findOne({ userName: req.body.username })
    .then((student) => {
      if (student) {
        if (req.body.password === student.password) {
          res.send({ success: "success", data: student.userName });
        } else {
          res.send({ success: "InvalidPassword" });
        }
      } else {
        console.log("Inside not student");
        res.send({ success: "failure" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
//********** */
//for 1st Bsc
app.post("/updateClass", async (req, res) => {
  Student.find({ course: req.body.course }) //find all students whose course matches the value provided
    .then((students) => {
      console.log("smth:" + students);
      for (let i = 0; i < students.length; i++) {
        //going throgh each student in the student array
        students[i].subjects.push(req.body.subject); // Adding the subject to the subjects array of the current student
        students[i].Plink.push(req.body.plink);
        students[i].save(); // update the changes  to the current student's document in the database
      }
    })
    .catch((err) => {
      console.log(err);
    });
  Teacher.findOne({ userName: req.body.teacher }) // find an teacher document
    .then(async (teacher) => {
      if (teacher) {
        console.log(teacher);
        teacher.CoursesTaught.push(req.body.course); // Adding the course value from req.body.course to the CoursesTaught array of the found teacher document
        teacher.SubjectTaught.push(req.body.subject); // Adding the course value from req.body.course to the CoursesTaught array of the found teacher document
        teacher.Plink.push(req.body.plink);
        await teacher.save();

        Teacher.find({})
          .then((teacher) => {
            let teacherArr = [];
            console.log(teacher);
            for (let j = 0; j < teacher.length; j++) {
              for (let k = 0; k < teacher[j].CoursesTaught.length; k++) {
                if (teacher[j].CoursesTaught[k] === "1st BSc") {
                  teacherArr.push(teacher[j].userName);
                }
              }
              teacher[j].save();
            }
            console.log(teacherArr);
            res.send({ success: teacherArr });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/fetchTeachers", (req, res) => {
  Teacher.find({})
    .then((teacher) => {
      let teacherArr = [];
      console.log(teacher);
      for (let j = 0; j < teacher.length; j++) {
        for (let k = 0; k < teacher[j].CoursesTaught.length; k++) {
          if (teacher[j].CoursesTaught[k] === "1st BSc") {
            teacherArr.push(teacher[j].userName);
          }
        }
        teacher[j].save();
      }
      console.log(teacherArr);
      res.send({ teacherArr: teacherArr });
    })
    .catch((err) => {
      console.log(err);
    });
});

// ************
//for 2nd Bsc

app.post("/update2BScClass", async (req, res) => {
  Student.find({ course: req.body.course }) //find all students whose course matches the value provided
    .then((students) => {
      for (let i = 0; i < students.length; i++) {
        //going throgh each student in the student array
        students[i].subjects.push(req.body.subject2BSc); // Adding the subject to the subjects array of the current student
        students[i].save(); // update the changes  to the current student's document in the database
      }
    })
    .catch((err) => {
      console.log(err);
    });

  Teacher.findOne({ userName: req.body.teacher2BSc }) // find an teacher document
    .then(async (teacher) => {
      if (teacher) {
        console.log(teacher);
        teacher.CoursesTaught.push(req.body.course); // Adding the course value from req.body.course to the CoursesTaught array of the found teacher document
        teacher.SubjectTaught.push(req.body.subject2BSc); // Adding the course value from req.body.course to the CoursesTaught array of the found teacher document
        await teacher.save();

        Teacher.find({})
          .then((teacher2BSc) => {
            let teacher2BScArr = [];
            console.log(teacher2BSc);
            for (let j = 0; j < teacher2BSc.length; j++) {
              for (let k = 0; k < teacher2BSc[j].CoursesTaught.length; k++) {
                if (teacher2BSc[j].CoursesTaught[k] === "2nd BSc") {
                  teacher2BScArr.push(teacher2BSc[j].userName);
                }
              }
              teacher2BSc[j].save();
            }
            console.log(teacher2BScArr);
            res.send({ success: teacher2BScArr });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/fetch2BScTeachers", (req, res) => {
  Teacher.find({})
    .then((teacher2BSc) => {
      let teacher2BScArr = [];
      //console.log(teacher2BSc);
      for (let j = 0; j < teacher2BSc.length; j++) {
        for (let k = 0; k < teacher2BSc[j].CoursesTaught.length; k++) {
          if (teacher2BSc[j].CoursesTaught[k] === "2nd BSc") {
            teacher2BScArr.push(teacher2BSc[j].userName);
          }
        }
        teacher2BSc[j].save();
      }
      console.log("ok" + teacher2BScArr);
      res.send({ teacher2BScArr: teacher2BScArr });
    })
    .catch((err) => {
      console.log(err);
    });
});
//for teachers
app.post("/getSubjects", (req, res) => {
  Teacher.findOne({ userName: req.body.name }).then((teacher) => {
    let subjects = [];
    let data = {};
    let subjectArr = [];
    for (let i = 0; i < teacher.SubjectTaught.length; i++) {
      // subjectArr.push(teacher.SubjectTaught[i]);
      subjects.push(teacher.SubjectTaught[i]);
    }

    for (let j = 0; j < teacher.Plink.length; j++) {
      data.subject = subjects[j];
      data.link = teacher.Plink[j];
      subjectArr.push({ ...data });
    }
    res.send({ success: "success", subjects: subjectArr });
  });
});

app.listen(8000, function () {
  console.log("Server started on port 8000");
});
//for students
app.post("/getStudentSubjects", (req, res) => {
  Student.findOne({ userName: req.body.name }).then((student) => {
    let subjects = [];
    let data = {};
    let subjectArr = [];
    for (let i = 0; i < student.subjects.length; i++) {
      // subjectArr.push(student.subjects[i]);
      subjects.push(student.subjects[i]);
    }
    for (let j = 0; j < student.Plink.length; j++) {
      // linkArr.push(student.Plink[j]);
      // subjectArr.link = student.Plink[j];
      data.subject = subjects[j];
      data.link = student.Plink[j];
      subjectArr.push({ ...data });
    }
    res.send({ succcess: "success", subjects: subjectArr });
    console.log(subjectArr);
  });
});

app.post("/addStudent", (req, res) => {
  console.log(req.body);
  Student.findOne({userName: req.body.userName}).then((student) => {
    if (student) {
      console.log("Student already exists");
    } else {
      console.log("Enter");
      Student.create({userName: req.body.userName, password: req.body.password, course: req.body.course});
    }
  })
})

app.post("/addTeacher", (req, res) => {
  console.log(req.body);
  Teacher.findOne({userName: req.body.userName}).then((teacher) => {
    if (teacher) {
      console.log("Teacher already exists");
    } else {
      console.log("Enter");
      Teacher.create({userName: req.body.userName, password: req.body.password});
    }
  })
})



// const user34 = new Student({
//     userName : "siraj",
//     password: "partho",
//     course: "1st BSc",
//     subjects: ["UCSH-101", "UCSH-102"]
// });
// user34.save();

// Teacher.updateOne({userName: "sunil"},{CoursesTaught:[]})
// .then((user) =>{
//     console.log(user);
// })
// .catch((err) =>{
//     console.log(err);
// })
