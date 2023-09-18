import React,{ useEffect, useState } from "react";
import './info.css'
import axios from "axios";
import Simple from './lo.png';

export function StudentInfo()
{
    const [details, setDetails] = useState([]);

    useEffect(() => {
        var code = localStorage.getItem('department');
        var roll = localStorage.getItem('student');

        fetch("http://localhost:1113/studentInfo/" + code + '/' + roll)
            .then(res => res.json())
            .then(data => setDetails(data))

    }, []);

    return(
        <>
        <nav className="container-fluid mr-auto ml-auto sticky-top infonav shadow">
            <h1 className="text-center pt-3">STUDENT INFORMATION</h1>
        </nav>
            <div className="infomaindiv pt-5">
                <div className="infofidiv justify-content-center text-center">
                    {details.map((value,index) => (
                        <>
                            <img src={value.image} alt="no image found" className="stuinfoimg rounded-pill" />
                            <h4 className="inforolltext">{value.roll_no}</h4>
                            <h3 className="infornametext">{value.student_name}</h3>
                            <h1 className="infomaintext">PERSNATIONAL INFORMATION</h1>
                            <div className="infosecdiv">
                                <table className="infotbl container w-75" border="2px solid black">
                                    <tr className="infotr" >
                                        <td className="infodettext">Department Name : </td>
                                        <td className="infodettext">{value.department_name}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Department Code : </td>
                                        <td className="infodettext">{value.department_code}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Father Name : </td>
                                        <td className="infodettext">{value.father_name}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Nationality : </td>
                                        <td className="infodettext">{value.nationality}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Gender : </td>
                                        <td className="infodettext">{value.gender}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Date Of Birth : </td>
                                        <td className="infodettext">{value.date_of_birth}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Phone Number : </td>
                                        <td className="infodettext">{value.phone_number}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">E-Mail : </td>
                                        <td className="infodettext">{value.email}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">10th Mark : </td>
                                        <td className="infodettext">{value.sslc_mark}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">10th School Detail : </td>
                                        <td className="infodettext">{value.sslc_school_det}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">12th Mark : </td>
                                        <td className="infodettext">{value.hsc_mark}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">12th School Detail : </td>
                                        <td className="infodettext">{value.hsc_school_det}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Sports Type : </td>
                                        <td className="infodettext">{value.game_type}</td>
                                    </tr>
                                    <tr className="infotr" >
                                        <td className="infodettext">Game Position : </td>
                                        <td className="infodettext">{value.game_role}</td>
                                    </tr>
                                </table>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
