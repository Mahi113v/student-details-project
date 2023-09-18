import React from "react";
import './style.css';
import Man from './imagemann.jpg'
import {Woman} from './imagewomann.jpg'
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Student() {
    const navigate = useNavigate();
    const [details, setDetails] = useState([]);

    let name = localStorage.getItem('department')
    console.log(name);
    // alert(name);
    useEffect(() => {
        fetch("http://localhost:1113/studentDetailGet/" + name)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])
    const Selectstudent = (value) => () => {
        console.log(value);
        // alert(value.roll_no);
        localStorage.setItem('student', value.roll_no);
        navigate('/StudentReg');
    }

    return(
        <>
            <div className="studivmain">
                <div className="container-fluid mr-auto ml-auto shadow bg-primary sticky-top">
                    <h1 className="text-center text-light">STUDENT LIST</h1>
                </div>
                <div className="row mr-auto ml-auto mt-5 text-center w-75 studivsec">
                    {details.map((value, index) => (
                        <>
                            <div className="card col-lg-3 col-3 ml-3 mt-4 rounded container">
                                <img src={value.image} className="card-img-top studetimg rounded-pill ml-5 h-50 w-50" alt='' />
                                <div className="card-body text-white">
                                    <h2 className="card-title text-dark" id="teamTitle">{value.roll_no}</h2>
                                    <h3 className="card-title text-dark">{value.student_name}</h3>
                                    <button className="p-2 studetbut rounded-pill" onClick={Selectstudent(value)}>Show Detail</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}