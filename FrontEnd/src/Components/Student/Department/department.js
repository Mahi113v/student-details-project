import React, { useEffect, useState } from 'react';
import './department.css'
import { Link, useNavigate } from 'react-router-dom';


export function Department()
{
    let navigate= useNavigate();
    const[details,setDetails] = useState ([])
    useEffect(() => {
        fetch("http://localhost:1113/department")
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    let depart = (value) => () => {
        // alert(value.department_code);
        localStorage.setItem("department" ,value.department_code);
        navigate('/Student')
    }

    return(
        <>
            <div className='departmaindiv container-fluid mr-auto ml-auto bg-info text-light shadow sticky-top'>
                <h1 className='departtext text-center'>DEPARTMENTS</h1>
            </div>
            <div className='departsecdiv row justify-content-around'>
                {details.map((value) => (
                    <>
                        <div className="mt-5 text-center col-lg-4" style={{ width: '18rem' }} onClick={depart(value)}>
                            <img src={value.image} alt='card-image-top' className='departimg'/>
                            <button className="departcardtext rounded-pill ml-5 w-75 text-center text-black p-1 mt-2" >{value.department_name}</button>
                        </div>
                    </>
                ))};
            </div>
        </>
    );
}
