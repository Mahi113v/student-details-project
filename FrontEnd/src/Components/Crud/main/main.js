import  React , { useState, useEffect } from "react";
// import Navigate from "navigate";
import axios from "axios";
import { Link } from 'react-router-dom';


export function Mainn() {

    const [details, setDetails] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:1113/employe')
        .then(res => setDetails(res.data))
        .catch(err=> console.log(err));
    },[])
    
    const empDelete = async (emp_id) =>{
        try{
            await axios.delete('http://localhost:1113/empDelete/' + emp_id)
            window.location.reload()
            alert("Deleted Successfully..!")
        }catch(err){
            console.log(err);
        }
    }

    const empchange = () => {

    }

    return(
        <>
            <div className="crudmaindiv vh-100 align-center justify-content-center">
                <div className="mr-auto ml-auto container-fluid text-center text-light bg-primary sticky-top shadow-dark">
                    <h1 className="hometext"> CRUD OPERATION </h1>
                </div>
                <div className="col-lg-12 d-flex ml-auto mr-auto">
                    <div className="col-lg-10"></div>
                    <Link to='/Employee' className="btn btn-primary ml-5 pl-3">Add Employee</Link>
                </div>
                <div className="p-3 container-fluid ml-auto mr-auto">
                    <div className="container">
                        <table className="crud-table mt-5" border={2}>
                            <thead className="">
                                <th className="ctth p-2">Serial No</th>
                                <th className="ctth p-2">Employee Name</th>
                                <th className="ctth p-2">Employee ID</th>
                                <th className="ctth p-2">Phone Number</th>
                                <th className="ctth p-2">Email</th>
                                <th className="ctth p-2">Action</th>
                            </thead>
                            <tbody>
                                {details.map((value,index) => (
                                    <>
                                        <tr className="cttr">
                                            <td className="cttd p-2">{value.s_no}</td>
                                            <td className="cttd p-2">{value.emp_name}</td>
                                            <td className="cttd p-2">{value.emp_id}</td>
                                            <td className="cttd p-2">{value.ph_no}</td>
                                            <td className="cttd p-2">{value.email}</td>
                                            <td className="cttd p-2">
                                                <Link to={`/Edit/${value.id}`}className="cttdbut btn-primary rounded p-2 mr-2">Edit</Link>
                                                <button type="button" className="cttdbutt btn-danger rounded p-2" onClick={ () => empDelete(value.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}