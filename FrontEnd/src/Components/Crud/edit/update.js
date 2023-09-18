import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


export function Edit() {
    let { emp_id } = useParams();
    const [emp_name, setEmployeName] = useState('');
    const [gender, setGender] = useState('');
    const [join_date, setJoinDate] = useState('');
    const [resign_date, setResignDate] = useState('');
    const [ph_no, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch("http://localhost:1113/update/" + id + '')
            .then(res => res.json())
            .then((res) => {
                setEmploye
                Name(res[0].emp_name);
                setgender(res[0].gender);
                setJoinDate(res[0].join_date);
                setResignDate(res[0].resign_date);
                setPhoneNumber(res[0].ph_no);
                setEmail(res[0].email);
            })
        console.log(emp_name)
    }, [])

    const updates = async (event) => {
        event.preventDefault();
        var config = { header: { "enctype": "multipart/form-data" } };
        //Insertion  API  after update  (update)
        await axios.put('http://localhost:1113/empUpdate/' + id + '')
            .then((res) => {
                if (res.data.status === "error") {
                    alert("error");
                    window.location.reload();
                }
                else if (res.data.status === "success") {
                    alert("updated");
                    window.location.href = "/";
                }
            }, [])
            .catch((error) => {
                alert("API NOT Called")
            })

    }
    return (
    <>
        <div>
            <h1 className="text-center">Updatation Form</h1>
            <div className="  lands  mt-5" style={{ paddingLeft: '' }}>
                <form onSubmit={updates}>
                    <label className="w-25 p-3">Employe Name : </label>
                        <input type="text" id="name" name="name" className=" p-2" value={name} onChange={(e) => setName(e.target.value)} required /><span id="span_name" ></span><br />
                    <label className="w-25 p-3">Employe ID : </label>
                        <input type="text" id="job"  className=" p-2" value={job} onChange={(e) => setJob(e.target.value)} required /><br />
                    <label className="w-25 p-3">Gender : </label>
                        <input type="text" id="gender"  className=" p-2" value={gender} onChange={(e) => setGender(e.target.value)} required /><br />
                    <label className="w-25 p-3">Phone Number : </label>
                        <input type="tel" id="hire_date" className=" p-2" value={hire_date} onChange={(e) => setHiredate(e.target.value)} required /><br />
                    <label className="w-25 p-3">Join Date : </label>
                        <input type="tel" id="hire_date" className=" p-2" value={hire_date} onChange={(e) => setHiredate(e.target.value)} required /><br />
                    <label className="w-25 p-3">Resign Date : </label>
                        <input type="tel" id="hire_date" className=" p-2" value={hire_date} onChange={(e) => setHiredate(e.target.value)} required /><br />
                    <label className="w-25 p-3">Email ID : </label>
                        <input type="text" id="salary"  className="p-2" value={salary} onChange={(e) => setSalary(e.target.value)} required /><br />
                    <button className='btn btn-primary' >Update</button>
                </form>
            </div>
        </div>
    </>);
}