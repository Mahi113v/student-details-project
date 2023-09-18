import React from "react";
import './main.css'
import Logo from './lo.png'
import {Link} from 'react-router-dom';

export function Main()
{
    return(
        <>
            <div class="landmaindiv text-light m-0 p-0">
                {/* <nav class="col-lg-12 landnav navbar navbar-expand-lg navbar-light sticky-top container-fluid shadow">
                    <div class="col-lg-4">
                        <img src={Logo} alt="no image found" className="landimg"/>
                    </div>
                    <div class="collapse navbar-collapse col-lg-4 text-light" id="navbarScroll">
                        <h2 className="landdivtext">STUDENT DETAILS</h2>
                    </div>
                    <div class="col-lg-4 pl-5">
                        <form class="landnavform pl-5 ml-5">
                            <Link to='/Login'><button className="btn btn-success rounded ml-3" type="button">LogIn</button></Link>
                            <Link to='/Admin'><button className="btn btn-danger rounded ml-4" type="button">SignUp</button></Link>
                        </form>
                    </div>
                </nav> */}
                <nav class="navbar navbar-light shadow sticky-top">
                    <a class="navbar-brand">
                        <img className="landimg" src={Logo} alt='no image found' />
                    </a>
                    <h1 className="font-weight-bold ml-5">STUDENT INWARD</h1>
                    <form className="form-inline">
                        <Link to="/Login"><button class="btn btn-primary my-2 my-sm-0" type="submit">LogIn</button></Link>
                        <Link to="/Admin"><button class="btn btn-success my-2 my-sm-0 ml-3" type="submit">SignUp</button></Link>
                    </form>
                </nav>
                <div className='container-fluid landsecdiv col-lg-12 pt-5'>
                    <div className='landsecfidiv col-lg-5'></div>
                    <div className='landsecsecdiv container col-lg-3 pt-5 mt-5 pl-5'>
                        <Link to='/StudentReg'><button className="landdivbut" type="button">Registeration</button></Link>
                    </div>
                    <div className='landsecthdiv col-lg-4'></div>
                </div>
            </div>
        </>
    );
}