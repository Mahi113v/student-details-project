const express = require('express');
const cors = require('cors');
const fileupload = require ('express-fileupload');
const database = require('mysql');
const bodyparse = require('body-parser');
const {application , request , response} = require('express');

const crud = express();
crud.use(cors());
crud.use(fileupload());
crud.use(bodyparse.json());
crud.use(express.json());
crud.use(express.static('public'));

let employee = database.createConnection({
    host: "localhost",
    user: "root",
    password: "Mahi17100@",
    database: "student"
})

employee.connect(function(error)
{
    if (error) {
        console.log("Data-Base Not Connected..!")
    } else {
        console.log("Data-Base Connected..!")
    }
})


                // GET API

crud.get('/employe', (request,response) => {
    console.log(request.params);
    employee.query('select emp_id, emp_name, ph_no, email from crud', // add where retrive the data by id
    (error, result) => {
        if(error) {
            console.log(error)
        } else {
            response.send(result)
            console.log(result)
        }
    })
})


                // INSERT API

crud.post('/empInsert' , (request , response) => {
    try {
        console.log(request.body);
        try {
            let {emp_id, emp_name, gender, join_date, resign_date, ph_no, email} = request.body;
            let sql = 'insert into crud (emp_id, emp_name, gender, join_date, resign_date, ph_no, email, effective_from, effective_on, created_by, created_on, status) values (?,?,?,?,?,?,?,current_timestamp(), current_timestamp(), current_user(), current_timestamp(), "A")';
            employee.query(sql , [emp_id, emp_name, gender, join_date, resign_date, ph_no, email], (error,result) => {
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

crud.get('/employe/:emp_id', (request,response) => {
    try {
        console.log(request.params);
        try {
            let {emp_id} = request.params;
            let sql = 'select emp_id, emp_name, gender, join_date, resign_date, ph_no, email from crud where emp_id = ? and status = "A"';
            employee.query(sql , [emp_id] , (error,result) => {
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


crud.put('/employeUpdate/:emp_id' , (request,response) => {
    try {
        console.log(request.params);
        try {
            let {emp_id} = request.params;
            let sql = 'update crud set emp_id = , emp_name = , gender = , join_date = , resign_date = , ph_no = , email = where emp_id = ?';
            employee.query(sql , [emp_id] , (error,result) => {
                if (error) {
                    console.log(error);
                } else {
                    response.send(result);
                    console.log(result);
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

                // DELETE API

crud.delete('/empDelete/:emp_id' , (request,response) => {
    try {
        console.log(request.params);
        try {
            let sql = 'delete from crud where emp_id = ' + request.params.emp_id +'';
            employee.query(sql , (error) => {
                if (error) {
                    console.log(error);
                    response.send({ Status : false, message: "Employee Deleted Failed..!" });
                } else {
                    response.send({ Status : true, message: "Employee Deleted Successful..!" });
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
                
                
crud.listen(1234 , () => {
    console.log("Server is Running on 1234 Port Successfully..!");
})