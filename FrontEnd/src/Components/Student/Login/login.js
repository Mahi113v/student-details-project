import React, { useState } from 'react';
import './log.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export function Login()
{
    const navigate = useNavigate();
    const [error,setError]=useState('')
    const validate = (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var username = document.getElementById("name").value;
        var password = document.getElementById("pass").value;
        if (username == "") {
            alert("please enter the name")
        } else if (password == "") {
            alert("please enter the password")
        } else {
            let user_info = {
                "email": username,
                "password": password
            }
            console.log(user_info);
            // document.getElementById("name").value = "";
            // document.getElementById("pass").value = "";
            axios.post("http://localhost:1113/userLogin", user_info, config)
                .then(function (res) {
                    if (res.data.status == 'error') {
                        alert('error')
                        console.log(res.data);
                    } else if (res.data.status == 'success') {
                        alert('success')
                        navigate("/Department")
                        console.log(res.data);
                    }
                })
        }
    }
    return(
        <>
            <div className="logmaindiv">
                <form className='logform pt-5'>
                    <h1 className='logformtext'>Login Here</h1>
                    <input type="email" className="forminput" id="name" name="name" placeholder="Enter E-Mail / User Name Here" />
                    <input type="text" className="forminput" id="pass" name="pass" placeholder="Enter Password Here" />
                    <h6 className='logformht'><Link to='' className='logformlink'>Forget Password..?</Link></h6>
                    <button type="button" className="rounded-pill logformbut ml-5" id="but" name="but" onClick={validate}>Login</button><br/>
                    <p class="logpra">Don't Have an Account<br/><Link to='/Login' className='logpralink'>Login</Link> / <Link to='/Admin' className='logpralink'>Sign Up</Link>here</p>
                </form>
            </div>
        </>
    );
}