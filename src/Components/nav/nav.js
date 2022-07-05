import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import { useMsal } from "@azure/msal-react";
import  {loginRequest}  from "../../authConfig";
import { useIsAuthenticated } from "@azure/msal-react";

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

const Nav = (props) =>{

    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">T - Come</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                           
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/' >
                                        Packages
                                    </Link>

                                </li>
                               
                            
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/customers' >
                                        Customers
                                    </Link>

                                </li>
                               

                                {
                                    isAuthenticated?<li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/payments' >
                                        Payments 
                                    </Link>

                                </li>:<p></p>
                                }
                           
                                
                               
                            {isAuthenticated?<li className="nav-item ">
                                    <a className="nav-link " onClick={() => handleLogout(instance)} >
                                        Logout
                                    </a>
                                </li> : <li className="nav-item">
                                    <a className="nav-link " aria-current="page" to='login' onClick={() => handleLogin(instance)} >
                                        Login
                                    </a>

                                </li>}
                            
                               
            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Nav;