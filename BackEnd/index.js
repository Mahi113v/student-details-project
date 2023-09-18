const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const bodyparse = require("body-parser");
const database = require("mysql");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");
const util = require("util");
const {application, request, response} = require('express');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyparse.json());
add.use(express.json());
add.use(express.static('public'));

let student = database.createConnection({
    host: "localhost",
    user: "root",
    password: "Mahi17100@",
    database: "student"
})


student.connect(function(error)
{
    if(error)
    {
        console.log(error);
    } else {
        console.log("db connected")
    }
})


                // add

                // GET API

add.get('/employe', (request,response) => {
    console.log(request.params);
    student.query('select * from crud' , (error, result) => {
        if(error) {
            console.log(error)
        } else {
            response.send(result)
            console.log(result)
        }
    })
})


add.get('/empGet/:emp_id', (request,response) => {
    let {emp_id} = request.params;
    let sql = 'select * from crud where emp_id = ?';
    student.query(sql ,[emp_id] , (error, result) => {
        if(error) {
            console.log(error)
        } else {
            response.send(result)
            console.log(result)
        }
    })
})

                // INSERT API

add.post('/empInsert' , (request , response) => {
    try {
        console.log(request.body);
        try {
            let {emp_id, emp_name, gender, join_date, resign_date, ph_no, email} = request.body;
            let sql = 'insert into crud (emp_id, emp_name, gender, join_date, resign_date, ph_no, email, effective_from, effective_on, created_by, created_on, status) values (?,?,?,?,?,?,?,current_timestamp(), current_timestamp(), current_user(), current_timestamp(), "A")';
            student.query(sql , [emp_id, emp_name, gender, join_date, resign_date, ph_no, email], (error,result) => {
                if (error) {
                    console.log(error);
                    const m = { status: "error", message: "Created unsuccessful!" };
                    response.status(500).send(m);
                    } else {
                    const m = { status: "success", message: "Created successful!" };
                    response.status(200).send(m);
                }
            })
        } catch (apperror) {
            response.send(apperror);
            response.send("Status : Success..!");
        }
    } catch (systemerror) {
        response.send(systemerror);
    }
})


                // CREATE API

add.get('/employe/:emp_id', (request,response) => {
    try {
        console.log(request.params);
        try {
            let {emp_id} = request.params;
            let sql = 'select emp_id, emp_name, gender, join_date, resign_date, ph_no, email from crud where emp_id = ? and status = "A"';
            student.query(sql , [emp_id] , (error,result) => {
                if(error){
                    console.log(error);
                } else {
                    response.send(result);
                    console.log(result);
                }
            })
        } catch (apperror) {
            response.send(apperror)
            response.send("Status : Success..!");
        }
    } catch (systemerror) {
        response.send(systemerror);
    }
})


                // UPDATE API


add.get('/update/:emp_id', (request, response) => {
    let { emp_id } = request.params;
    let sql = "select * from crud where emp_id=?";
    student.query(sql, [emp_id], (error, result) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(result);
        }
    })
})


add.put('/employeUpdate/:emp_id' , (request,response) => {
    try {
        console.log(request.params);
        let emp_id = request.params.emp_id;
        let {emp_name, gender, join_date, resign_date, ph_no, email} = request.body;
        let sql = 'update crud set emp_name = ? , gender = ? , join_date = ? , resign_date = ? , ph_no = ? , email = ? where emp_id = ?';
        student.query(sql , [emp_name, gender, join_date, resign_date, ph_no, email, emp_id] , (error,result) => {
            if (error) {
                let v = { "Status" : "error"};
                response.send(v);
                console.log(error);
            } else {
                let v = { "Status" : "Success"};
                response.send(v);
                console.log(result);
            } 
        })
    } catch (apperror) {
        response.send(apperror);
        response.send("Status : Success");
    }
})

                // DELETE API


add.delete("/empDelete/:emp_id", (request, response) => {
    let sql = "DELETE FROM crud WHERE emp_id = ? " ;
        const emp_id=request.params.emp_id;
        student.query(sql, [emp_id], (error, result) => {
            if (error)return response.json("Error");
            return response.json(result);
        })
    })


add.delete('/delete/:emp_id' , (request,response) => {
    try {
        console.log(request.params);
        let sql = 'delete from crud where emp_id = ?';
        const emp_id=req.params.emp_id;
        student.query(sql , [emp_id], (error,result) => {
            if (error) {
                console.log(error);
                response.send({ Status : false, message: "Employe Deleted Failed..!" });
            } else {
                response.send({ Status : true, message: "Employe Deleted Successful..!" });
            }
        })
    } catch (apperror) {
        response.send(apperror);
        response.send("Status : Success..!");
    }
})                

                    // STUDENT

                    // GET API'S

add.get('/department', (request,response) => {
    console.log(request.params);
    student.query('select image,department_code, department_name from department_details where status = "A"', // add where retrive the data by id
    (error, result) => {
        if(error) {
            console.log(error)
        } else {
            response.send(result)
            console.log(result)
        }
    })
})


add.get('/studentDetail', (request,response) => {
    console.log(request.params);
    student.query('select image, roll_no, department_name, department_code, batch, student_name, father_name , nationality, gender, date_of_birth, phone_number, email, sslc_mark, sslc_school_det, hsc_mark, hsc_school_det, game_type, game_role from student_details where status = "A"',
    (error, result) => {
        if(error) {
            console.log(error)
        } else {
            console.log(result)
            response.send(result)
        }
    })
})


add.get('/studentDetailGet/:department_code',(request,response)=>{
    try{
        console.log(request.params);     
        try{
            let{department_code}=request.params
           let sql='select image, roll_no, department_name, department_code, batch, student_name, father_name , nationality, gender, date_of_birth, phone_number, email, sslc_mark, sslc_school_det, hsc_mark, hsc_school_det, game_type, game_role from student_details where status="A" and department_code = ?';
                student.query(sql,[department_code],(error,result)=>{ 
                if(error){
                   let e= {'status':'error'}
                   response.send(e);
                   console.log(e);
                }else{
                    response.send(result)
                }
            });            
        }catch (apperror) {
            response.send(apperror);
            response.send("Status: success");
        } 
    }catch (systemerror) {
        response.send(systemerror);
    }
});


add.get('/studentInfo/:department_code/:roll_no',(request,response)=>{
    try{
        console.log(request.params);     
        try{
            let{department_code,roll_no}=request.params
           let sql='select image, roll_no, department_name, department_code, batch, student_name, father_name , nationality, gender, date_of_birth, phone_number, email, sslc_mark, sslc_school_det, hsc_mark, hsc_school_det, game_type, game_role from student_details where status="A" and department_code = ? and roll_no = ?';
                student.query(sql,[department_code,roll_no],(error,result)=>{ 
                if(error){
                   let e= {'status':'error'}
                   response.send(e);
                   console.log(e);
                }else{
                    response.send(result)
                }
            });            
        }catch (apperror) {
            response.send(apperror);
            response.send("Status: success");
        } 
    }catch (systemerror) {
        response.send(systemerror);
    }
});


                // DEPARTMENT API

add.post('/department',(request,response)=>{
    try {
        console.log(JSON.stringify(request.body));
        let {image, department_code,department_name}=request.body;
        if(image != null && department_code !=null && department_name !=null) {
            let sql='insert into department_details (image, department_code, department_name,effective_from, effective_on, created_by, created_on, status) values(?,?,?,current_timestamp(),current_timestamp(),current_user(),current_timestamp(),"A")';
            student.query(sql,[image, department_code,department_name],(error,result)=>{
                if(error){
                    let s={"status":"error"};
                    response.send(s);
                    console.log(error);
                } else {
                    let s={"status":"success"};
                    response.send(s);
                }
            })
        } else {
            let s={"status":"InvalidData"};
            response.send(s);
        }
    }catch(e){
        response.send(e);
    }
})


                    //  ADMIN API

add.post('/admin',(request,response)=>{
    try{
        console.log(JSON.stringify(request.body));
        let {department_code, admin_name, gender, phone_number, email, password}=request.body;
        if(department_code !=null && admin_name !=null && gender !=null && phone_number !=null && email !=null && password !=null) {
            let sql='insert into adminsignup (department_code, admin_name, gender, phone_number, email, password, effective_from, effective_on, created_by, created_on, status) values (?,?,?,?,?,?,current_timestamp(),current_timestamp(),current_user(),current_timestamp(),"A")';
            student.query(sql,[department_code, admin_name, gender, phone_number, email, password],(error,result)=>{
                if(error){
                    let msg={"status":"error"};
                    response.send(msg);
                    console.log(error);
                } else {
                    let msg={"status":"success"};
                    response.send(msg);
                }
            })
        }else{
            let msg={"status":"InvalidData"};
            response.send(msg);
        }
    }catch(error){
        response.send(error);
    }
})

                // LOGIN API

add.post("/userLogin", (request, response) => {
    const { email} = request.body;
    const sql = "select * from adminsignup where email = ? and status='A'";
    student.query(sql, [email], (error, result) => {
        if (error) {
            console.log(error);
            const msg = { status: "error" };
            response.send(msg);
        } else {
            if (result.length > 0) {
                const user = result[0];
                const msg = { status: "success", userId : user.id , message : "Login Successfully..!" };
                if (user.password === password) {
                    const msg = { status: "success", userId : user.id };
                    response.send(msg);
                    console.log(msg);
                    console.log("Login successful..!");
                } else {
                    const msg = { status: "error", message : "Wrong Password..!" };
                    response.send(msg);
                    console.log("Login not successful..!");
                }
            } else {
                const msg = { status: "error", message : "Invalid User..!" };
                response.send(msg);
                console.log("Login not successful..!");
            }
        }
    });
});


                    // STUDENT DETAILS API

add.post("/studentreg", (request, response) => {
    try{
        const {image, roll_no, department_name, department_code, batch, student_name, father_name, nationality, gender,date_of_birth, phone_number, email, sslc_mark, sslc_school_det, hsc_mark, hsc_school_det,game_type, game_role} = request.body;
    const sql ="INSERT INTO student_details (image, roll_no, department_name, department_code, batch, student_name, father_name , nationality, gender, date_of_birth, phone_number, email, sslc_mark, sslc_school_det, hsc_mark, hsc_school_det, game_type, game_role, effective_from, effective_on, created_by, created_on, status) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,current_timestamp(), current_timestamp(), current_user(), current_timestamp(), 'A')";
    student.query(sql,[image, roll_no, department_name, department_code, batch, student_name, father_name, nationality, gender,date_of_birth, phone_number, email, sslc_mark, sslc_school_det, hsc_mark, hsc_school_det,game_type, game_role], (error, result) => {
        if (error) {
          console.log(error);
          const m = { status: "error", message: "Registration unsuccessful!" };
          response.status(500).send(m);
        } else {
          const m = { status: "success", message: "Registration successful!" };
          response.status(200).send(m);
        //   console.log("Registration successful!");
        }
    });
    } catch (error) {
        response.send(error);
    }
});


                // MAIL SEND API

// function mail(){
//     try {
//         var transports;
//         transports = nodemailer.createTransport({
//             host : '127.0.0.1',
//             port : 587,
//             secure : false,
//             auth : {
//                 user : 'maheshmahesh0074@gmail.com',
//                 pass : 'Mahi17100@'
//             },
//         tls : {
//             rejectUnauthorized : true,
//             minVersion : "TLSv1.2"
//         }
//     })
//     if(transports){
//         var templateMessage = "Welcome Batch13";
//         var msg = util.format(templateMessage,"Mahi V");
//         var mailOptions = {
//             from : 'maheshmahesh0074@gmail.com',
//             to : 'mahe113v@gmail.com',
//             subject : "subject",
//             text : msg
//         };
//         transports.sendMail(mailOptions, (error, info) => {
//             if(error) {
//                 console.log("Unable to send Email : ","subject"," : ",error);
//             } else {
//                 console.log(info);
//             }
//         });
//         } else {
//             console.log("Email is switched off. Email Not send with Subject [","subject","]");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// } 
// mail();

// add.get('/schedule_Job/', (request,response) => {
//     console.log(request.params);
//     try{

//         try
//         {
//             schedule.scheduleJob('12 * * * * *',()=>{
//                 console.log(new Date());
//                 let sql ='select department_code,department_name from department_details'; 
//                 student.query(sql,(error, result) => {
//                     if(error) {
//                         console.log(error)
//                     }
//                     else {
//                         console.log(result)
//                         // response.send(result)
//                     }
//                 })
//             })
//         } catch(app_error) {

//         }
//     } catch(system_error) {
//         response.send(system_error);
//     }
    
// })


    add.listen(1113 , () => {
        console.log("server is running on 1113 port");
    });
