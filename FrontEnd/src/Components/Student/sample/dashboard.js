import React from "react";
import './login.css'
import axios from "axios";

export function Dash()
{

    const validate = () => {
        var name = document.getElementById("name").value
        var password = document.getElementById("pass").value
        if(name == "" || name == null)    {
            alert("Please fill the E-mail..!")
        } else if(password == "" || password == null)    {
            alert("Please fill the Password..!")
        } else {
            let user_info = {
                "username" : "name",
                "password" : "password"
            }
            axios.post('http://localhost:1010/check',user_info).then((res) => {
                console.log(res);
            }).catch ((err) => {
                console.log(err);
            })
        }
    }

    return(
        <>
            <div className="formdiv container-fluid text-light p-5">
                <div className="fromfidiv container bg-secondary rounded-pill w-50 h-50 p-5 mt-5">
                    <form className="formtag ">
                        <label className="formlable">Email : </label>
                        <input type="text" id="name" name="name" placeholder="E-mail" className="forminput " /><br/>
                        <label className="formlable">Password : </label>
                        <input type="password" id="pass" name="pass" placeholder="Password" className="forminput " /><br/>
                        <button type="submit" id="butt" className="formbut bg-primary rounded-pill" onClick={validate}>Submit</button> 
                    </form>
                </div>
            </div>
        </>
    );
}