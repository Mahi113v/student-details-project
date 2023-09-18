import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css'

export function Type()
{
    const navigate = useNavigate()
    let code = JSON.parse(localStorage.getItem('department'));
    console.log(code.department_name)

    const[details,setDetails] = useState([])
    useEffect(() => {

        fetch('http://localhost:3000/type.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])
    
    const Datas = (value) => () => {
        localStorage.setItem('gender',value);
        navigate('/Student');
    }
    
    return(
        <>
            <div className="mechnavdiv container-fluid m-0 p-0 text-center bg-primary">
                <h1 className="mechnavtext">Student Type</h1>
            </div>
            <div className="mechmaindiv row pt-4 pl-5 ml-5 justify-content-around">
                {details.map((value,index) => (
                    <>
                        <div class="card col-lg-5 typecardmaindiv" onClick={Datas(value.gender)}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={value.image} alt="no image found" className="typeimg" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title typetext">{value.gender}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

