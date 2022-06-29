/* eslint-disable */
import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

function carForm({addCars})
{

    
    const[car, setCar] =useState({
        id:"",
        email:"",
        regNo:"",
        userName:"",
        phoneNo:"",
        fromTime:"",
        toTime:""

    });

    

function handleRegNo(e)
{
    setCar({...car,regNo:e.target.value});
}
function handleEmail(e)
{
    setCar({...car, email:e.target.value});
}
function handluserName(e)
{
    setCar({...car,userName:e.target.value});
}
function handlephoneNo(e)
{
    setCar({...car,phoneNo:e.target.value});
}
function handleFromTime(e)
{
    setCar({...car,fromTime:e.target.value});
}
function handleToime(e)
{
    setCar({...car,toTime:e.target.value});
}

function handleSubmit(e){
    e.preventDefault();
        if(car.userName.trim())
        {
            //here ...todo means that the rest of the properties of the todo object stay same, the ID 
            //we generate
            addCars({...car,id:uuidv4() });
            //after we add the todo 
            // we reset the todo object (task input)
            setCar({...car,email:"",userName:"",phoneNo:"",fromTime:"",toTime:"",regNo:""});
        }
}

    return(
        <form onSubmit={handleSubmit}>
            <input value={car.regNo} onChange={handleRegNo} placeholder="Enter car registration Number" /><br/>
            <input value={car.email} onChange={handleEmail} placeholder="Enter emailID" /><br/>
            <input value={car.userName} onChange={handluserName} placeholder="Enter username" /><br/>
            <input value={car.phoneNo} onChange={handlephoneNo} placeholder="Enter phone Number" /><br/>
            <input value={car.fromTime} onChange={handleFromTime} placeholder="From" /><br/>
            <input value={car.toTime} onChange={handleToime} placeholder="To" />
            <button type="submit">Submit</button>
        </form>
            
        
    );

    
}

export default carForm;


