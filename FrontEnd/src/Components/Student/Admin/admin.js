import React from 'react';
import './admin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Admin()
{
    const navigate = useNavigate();
    function user()
    {
        var code=document.getElementById("dcode").value;
        var admin=document.getElementById("aname").value;
        var gender=document.getElementById("gen").value;
        var phone=document.getElementById("num").value;
            // var exp=/^(6-9)(0-9){9}/;
            // var ph=exp.test(ph);
        var mail=document.getElementById("mail").value;
            const expm=new RegExp(/^[a-zA-Z0-9]+[@][a-z]+[\.][a-z]{2,3}/);
            var mailid=expm.test(mail);
        var pword=document.getElementById("pass").value;
            // var expp=/^(A-Z)(a-zA-Z0-9){7,15}/m;
            // var pwd=expp.test(pword);
        if(code == "" || code == null) {
            alert("Please Fill The Serial Number");
        } else if(admin == "" || admin == null) {
            alert("Please Fill The Staff Name");
        } else if (mail == "" || mailid == false) {
            alert("Please Fill The E-mail");
        } else if(pword == "" || pword == null) {
            alert("Please Fill The Correct Format for Password 8 to 16 digit Characters");
        } else {
            alert("Register Successfully..!")
            let userInfo=
            {
                "department_code": code,
                "admin_name" : admin,
                "gender" : gender,
                "phone_number" : phone,
                "email" : mail,
                "password" : pword
            }
            axios.post('http://localhost:1113/admin',userInfo).then((res) =>
            {
                console.log(res);
                if(res.data.status){
                  alert(res.data.status)
                  navigate('/Login')
                }
                else{
                    alert("Invalid Account")
                }
                }).catch((err) => {
                console.log(err);
            })
        }
    }
    function validate()
    {
        var msg;
        var a=document.getElementById("pass").value;
        if(a.length >= 5)
        {
                msg="GOOD !!!";
        } else {
                msg="POOR !!!";
        }
        document.getElementById("signloc").innerText=msg;
    }

    return(
        <>
            <div className='signmaindiv'>
                <h1 className='text-center bg-info text-light signmaintext'>SIGN UP</h1> 
                <div className="container-fluid signtextdiv">
                    <div className="container mt-3 signfidiv">
                        <form className="text-dark signform">
                            <input type="text" className="signinp" id="dcode" name="dcode" placeholder="Department Code" required /><br/>
                            <input type="text" className="signinp" id="aname" name="aname" placeholder="Admin Name" required /><br/>
                            <input type="text" className="signinp" id="gen" name="gen" placeholder="Gender" required /><br/>
                            <input type="text" className="signinp" id="num" name="num" placeholder="Phone Number" required /><br/>
                            <input type="email" className="signinp" id="mail" name="mail" placeholder="Mail-Id" required /><br/>
                            <input type="password" className="signinp" id="pass" name="pass" onKeyUp={validate} placeholder="Password" required />
                                <span id="signloc" type="text" className='passspan'></span><br/><br/>
                            <button type="button" id="but" name="but" className="signbut rounded-pill w-75 text-center" onClick={user}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
