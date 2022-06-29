/* eslint-disable */
import React, { useState } from "react";

function carForm(){

    
    const[car, setCar] =useState({
        id:"",
        model:"",
        regNo:""
    });

function handleRegNo(e)
{
    setCar({...car,regNo:e.target.value});
}

    return(
        <form >
            <input name="regNo" value={car.regNo} onChange={handleCarRegNo}/>
            
        </form>
    );

    
}

export default carForm


