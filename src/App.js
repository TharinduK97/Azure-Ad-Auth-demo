
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Packages from './Components/package/package';
import Customers from "./Components/customers/customers";
import Payments from "./Components/payments/payments";
import Nav from "./Components/nav/nav";




import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


const App = (props) => {

    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Routes >

                    <Route path="/customers" element={
                        <UnauthenticatedTemplate>
                            <Customers />
                        </UnauthenticatedTemplate>
                    } />

                    <Route path="/payments" element={
                        <AuthenticatedTemplate>
                            <Payments />
                        </AuthenticatedTemplate>
                    } />



                    <Route path="/" exact element={
                        <UnauthenticatedTemplate>
                            <Packages />
                        </UnauthenticatedTemplate>
                    } />
                    <Route to="/" />

                </Routes>

            </div>
        </BrowserRouter>
    );
}


export default App;