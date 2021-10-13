import React from 'react'
import { Link } from "react-router-dom";
import  EmpdataAll  from './EmpdataAll';
import data from '../components/data.js'

const Empdetails = () => {
    return (
        <div className="container">
            <h3>Employee Birthday Details</h3>
            <EmpdataAll employee={data} />
            <Link to="/empbirthday">Today Birthday</Link>

        </div>
    )
}

export default Empdetails
