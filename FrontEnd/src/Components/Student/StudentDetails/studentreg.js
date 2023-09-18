import React from 'react';
import './student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function StudentReg() {
    const navigate = useNavigate();
    const student=()=>{
        var image = document.getElementById("img").value;
        var rollNumber = document.getElementById("roll").value;
        var departmentName = document.getElementById("dname").value;
        var departmentCode = document.getElementById("dcode").value;
        var batch = document.getElementById("batch").value;
        var name = document.getElementById("name").value;
        var fatherName = document.getElementById("fname").value;
        var nation = document.getElementById("nat").value;
        var gender = document.getElementById("gen").value;
        var date = document.getElementById("dob").value;
        var phoneNumber = document.getElementById("phn").value;
        var email = document.getElementById("mail").value;
        var sslcMark = document.getElementById("sslcm").value;
        var sslcSchool = document.getElementById("sslcs").value;
        var hscMark = document.getElementById("hscm").value;
        var hscSchool = document.getElementById("hscs").value;
        var sportsName = document.getElementById("sports").value;
        var sportsRole = document.getElementById("sportr").value;

        if(image =="" || image == null) {
            alert("Please Upload the Profile Picture..!")
        } else if (rollNumber == "" || rollNumber == null) {
            alert("Please fill the Roll Number..!")
        } else if (departmentName == "" || departmentName == null) {
            alert("Please fill the Department Name..!")
        } else if (departmentCode == "" || departmentCode == null) {
            alert("Please fill the Department Code..!")
        } else if (batch == "" || batch == null) {
            alert("Please fill the Your Starting to Ending Year..!")
        } else if (name == "" || name == null) {
            alert("Please fill the Your Name..!")
        } else if (fatherName == "" || fatherName == null) {
            alert("Please fill the Your Father Name..!")
        } else if (nation == "" || nation == null) {
            alert("Please fill the Nationality..!")
        } else if (gender == "" || gender == null) {
            alert("Please fill the Gender..!")
        } else if (date == "" || date == null) {
            alert("Please fill the Date Of Birth..!")
        } else if (phoneNumber == "" || phoneNumber == null) {
            alert("Please fill the Mobile Number..!")
        } else if (email == "" || email == null) {
            alert("Please fill the E-Mail..!")
        } else if (sslcMark == "" || sslcMark == null) {
            alert("Please fill the 10th School Mark..!")
        } else if (sslcSchool == "" || sslcSchool == null) {
            alert("Please fill the 10th School Details..!")
        } else if (hscMark == "" || hscMark == null) {
            alert("Please fill the 12th School Mark..!")
        } else if (hscSchool == "" || hscSchool == null) {
            alert("Please fill the 12th School details..!")
        } else if (sportsName == "" || sportsName == null) {
            alert("Please fill the 12th School Details..!")
        } else if (sportsRole == "" || sportsRole == null) {
            alert("Please fill the  Sports Position..!")
        } else {
            let  userInfo={
                "image" : image,
                "roll_no" : rollNumber,
                "department_name" : departmentName,
                "department_code" : departmentCode,
                "batch" : batch,
                "student_name" : name,
                "father_name" : fatherName,
                "nationality" : nation,
                "gender" : gender,
                "date_of_birth" : date,
                "phone_number" : phoneNumber,
                "email" : email,
                "sslc_mark" : sslcMark,
                "sslc_school" : sslcSchool,
                "hsc_mark" : hscMark,
                "hsc_school" : hscSchool,
                "game_type" : sportsName,
                "game_role" : sportsRole
            }
            console.log(userInfo);
            axios.post('http://localhost:1113/studentreg',userInfo)
            .then((res) => {
                console.log(res);
                if(res.data.status){
                  alert(res.data.status)
                  alert("Successfully Registered..!")
                  navigate('/')
                }
                else{
                    alert("Invalid Created Student Details")
                }
                }).catch((err) => {
                console.log(err);
            })
        }
    }

    return(
        <>
            <div className='stumaindiv container-fluid m-0 p-0'>
                <div className='stufidiv'>
                    <h1 className='stutexth text-center bg-info sticky-top'>Registeration Form</h1>
                    <form className='stuform container text-center mt-5'>
                        <label className='stulabel'>Enter Your Profile :</label><br/>
                        <input type='file' className='stuinput' id='img' name='img ' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Roll Number :</label><br/>
                        <input type='text' className='stuinput' id='roll' name='roll' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your Department Name :</label><br/>
                        <select className='stuinput' id='dname' name='dname'>
                            <option className='stuselect'>Select</option>
                            <option className='stuselect'>Mechanical Engineering</option>
                            <option className='stuselect'>Civil Engineering</option>
                            <option className='stuselect'>Computer Science Engineering</option>
                            <option className='stuselect'>Electrical and Electronical Engineering</option>
                            <option className='stuselect'>Electronical and Communication Engineering</option>
                        </select>
                        <label className='stulabel'>Enter Your Department Code :</label><br/>
                        <select className='stuinput' id='dcode' name='dcode'>
                            <option className='stuselectcode'>Select</option>
                            <option className='stuselectcode'>MECH</option>
                            <option className='stuselectcode'>CIVIL</option>
                            <option className='stuselectcode'>CSE</option>
                            <option className='stuselectcode'>EEE</option>
                            <option className='stuselectcode'>ECE</option>
                        </select>
                        <label className='stulabel'>Enter Your Batch :</label><br/>
                        <input type='text' className='stuinput' id='batch' name='batch' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your Name :</label><br/>
                        <input type='text' className='stuinput' id='name' name='name' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your Father Name :</label><br/>
                        <input type='text' className='stuinput' id='fname' name='fname' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Nationality :</label><br/>
                        <input type='text' className='stuinput' id='nat' name='nat' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Gender :</label><br/>
                        <input type='text' className='stuinput' id='gen' name='gen' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Date Of Birth :</label><br/>
                        <input type='date' className='stuinput' id='dob' name='dob' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Phone Number :</label><br/>
                        <input type='text' className='stuinput' id='phn' name='phn' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your Email :</label><br/>
                        <input type='email' className='stuinput' id='mail' name='mail' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your SSLC Mark :</label><br/>
                        <input type='text' className='stuinput' id='sslcm' name='sslcm' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your SSLC School Detail :</label><br/>
                        <input type='text' className='stuinput' id='sslcs' name='sslcs' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your HSC Mark :</label><br/>
                        <input type='text' className='stuinput' id='hscm' name='hscm' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Enter Your HSC School Detail :</label><br/>
                        <input type='text' className='stuinput' id='hscs' name='hscs' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Sports Name :</label><br/>
                        <input type='text' className='stuinput' id='sports' name='sports' placeholder='Your Answer' /><br/>
                        <label className='stulabel'>Sports Role :</label><br/>
                        <input type='text' className='stuinput' id='sportr' name='sportr' placeholder='Your Answer' /><br/>
                        {/* <label className='stulabel'>Roll Number :</label>
                        <input type='text' className='stuinput' id='roll' name='roll' placeholder='Your Answer' /><br/> */}
                        <button type='button' className='stubutton rounded-pill m-3' onClick={student}>Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}


// C:\\\\fakepath\\\\sports.jpg
// https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg  Man
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuOQRCQiZkiaVv6_gyrMNqUMSdSimwbReGYV8JaB9wI7pq2IsjHH75FXlho95lAleKojnpSaeU3kM&usqp=CAU&ec=48600113
// https://www.pngitem.com/pimgs/m/75-754416_female-user-free-images-female-business-user-icon.png  woman
// https://thumbs.dreamstime.com/b/female-user-icon-long-shadow-white-background-235751029.jpg