import React from "react";
import './login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Log()
{
    const navigate = useNavigate();
    const validate=()=>{
        var name = document.getElementById("name").value;
        var password= document.getElementById("pass").value;
        if(name =="")
        {
                alert("Please fill the Email..!")
            }
            else if(password == "")
            {
            alert("Please fill the Password..!")
        } else {
            let  userInfo={
                "email":name,
                "password":password
            }
            axios.post('http://localhost:1260/signin',userInfo).then((res) => {
            console.log(res);
            if(res.data.userId){
                alert("successfully login")
            }
            else{
                alert("there no user")
            }
                navigate('/Department')
            }).catch((err) => {
                console.log(err);
            })
            }
    }
        // document.getElementById("name").value=""
        // document.getElementById("pass").value=""

    return(
        <>
            <div className="formdiv container-fluid text-light p-5">
                <div className="fromfidiv container bg-secondary rounded-pill w-50 h-50 p-5 mt-5">
                    <form className="formtag ">
                        <label className="formlable">User Name : </label>
                        <input type="text" id="name" name="name" placeholder="User Name" className="forminput " /><br/>
                        <label className="formlable">Password : </label>
                        <input type="password" id="pass" name="pass" placeholder="Password" className="forminput " /><br/>
                        <button type="submit" id="butt" className="formbut bg-primary rounded-pill" onClick={validate}>Submit</button> 
                    </form>
                </div>
            </div>
        </>
    );
}