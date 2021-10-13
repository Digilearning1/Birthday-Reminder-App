import React from 'react'
import { Link } from "react-router-dom";
import data from '../components/data.js'
import Empdata from './Empdata.js';

const Empdetails = () => {
    return (
        <div className="container">
        <h3>Today Birthday</h3>
        <Empdata employee={data} />
        <Link to="/empdetails"> Employee Details</Link>
            
        </div>
    )
}

export default Empdetails
