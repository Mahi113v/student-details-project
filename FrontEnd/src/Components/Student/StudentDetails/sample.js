import React, { useEffect, useState } from "react";
import Virat from './virat.jpg'
import Flag from './indflag.jpg'
import Rohit from './rohit1.jpg'

export function Inplayer()
{
    const[details,setDetails] = useState([])
    useEffect(()=>{
        fetch('http://localhost:120/getinplayer/')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    return(
        <>
            <div className="odinav container-fluid m-0 p-0 text-center bg-primary">
                <h1 className="mainoditext">PLAYERS DETAILS</h1>
            </div>
            <div className="row container-fluid m-0 p-0">
                {details.map((value,index) => (
                    <>
                        <div className="card col-lg-4">
                            <div className="card-body">
                                <img src={} alt="" className="" />
                                <h4 className="">{value.}</h4>
                                <h5 className="">{value.}</h5>
                            </div>
                            <div className="">
                                <h1 className="card-title">PERSONAL INFORMATION</h1>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Born {value.}</li>
                                    <li class="list-group-item">Birth Place {value.}</li>
                                    <li class="list-group-item">Nickname {value.}</li>
                                    <li class="list-group-item">Role {value.}</li>
                                    <li class="list-group-item">Batting Style {value.}</li>
                                    <li class="list-group-item">Bowling Style {value.}</li>
                                </ul>
                                <table className="">
                                    <tbody className="">
                                        <thead className="">
                                            <th className="">Batting</th>
                                            <th className="">Bowling</th>
                                        </thead>
                                        <tr className="">
                                            <td className="">Matches {value.}</td>
                                            <td className="">Matches {value.}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="">Innings {value.}</td>
                                            <td className="">Innnings {value.}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="">Runs {value.}</td>
                                            <td className="">Maidens {value.}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="">Highest {value.}</td>
                                            <td className="">Wickets {value.}</td>
                                        </tr>
                                        <tr className="">
                                            <td className="">Best {value.}</td>
                                            <td className="">Best {value.}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}