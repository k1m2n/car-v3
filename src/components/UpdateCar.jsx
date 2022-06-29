/*es-lint disable*/
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
function UpdateCar({updateId,cars,setCars}){
 
    const[carNew, setCarNew] =useState({
        id:"",
        email:"",
        regNo:"",
        userName:"",
        phoneNo:"",
        fromTime:"",
        toTime:""

    });
    useEffect(() => {
        //Runs only on the first render
        const car= cars.filter((car) => car.id === updateId);
        setCarNew({id:car[0].id,email:car[0].email,regNo:car[0].regNo,userName:car[0].userName,
        phoneNo:car[0].phoneNo,fromTime:car[0].fromTime,toTime:car[0].toTime});
      }, []);

    // const car= cars.filter((car) => car.id === updateId);
    const idx=cars.findIndex((car)=>car.id===updateId);
    // let temp_state = [...cars];
	
	// // 2. Make a shallow copy of the element you want to mutate
	// let temp_element = { ...temp_state[idx] };

//     const[car, setCar] =useState(cars.filter((car) => car.id === updateId));

   function handleRegNo(e){
       setCarNew({...carNew,regNo:e.target.value})
//     setCars({...car,regNo:e.target.value});
 }
 function handleEmail(e)
{
    setCarNew({...carNew,email:e.target.value})
//     setCar({...car, email:e.target.value});
 }
function handluserName(e)
{
    setCarNew({...carNew,userName:e.target.value})
//     setCar({...car,userName:e.target.value});
 }
 function handlephoneNo(e)
{
    setCarNew({...carNew,phoneNo:e.target.value})
//     setCar({...car,phoneNo:e.target.value});
 }
 function handleFromTime(e)
 {
    setCarNew({...carNew,fromTime:e.target.value})
//     setCar({...car,fromTime:e.target.value});
 }
 function handleToTime(e)
{
    setCarNew({...carNew,toTime:e.target.value})
//     setCar({...car,toTime:e.target.value});
 }
const navigate=useNavigate();
function handleSubmit(e){
    // e.preventDefault();
    // temp_state[idx] = temp_element;
    // setCarNew(temp_state);
        // if(car.userName.trim())
        // {
        //     //here ...todo means that the rest of the properties of the todo object stay same, the ID 
        //     //we generate
        //     // addCars({...car,id:uuidv4() });
        //     //after we add the todo 
        //     // we reset the todo object (task input)
        //     setCar({...car,email:"",userName:"",phoneNo:"",fromTime:"",toTime:"",regNo:""});
        // }
        const updatedCars=cars;
        updatedCars[idx]=carNew;
        setCars(updatedCars);
        navigate('/');

}

    return(
        <form onSubmit={handleSubmit}>
            <input value={carNew.regNo}  onChange={handleRegNo} placeholder="Enter car registration Number" /><br/>
            <input value={carNew.email}  onChange={handleEmail} placeholder="Enter emailID" /><br/>
            <input value={carNew.phoneNo}  onChange={handlephoneNo} placeholder="Enter phone Number" /><br/>
            <input value={carNew.userName} onChange={handluserName} placeholder="Enter username" /><br/>
            <input value={carNew.fromTime} onChange={handleFromTime} placeholder="From" /><br/>
            <input value={carNew.toTime} onChange={handleToTime} placeholder="To" />
            <button type="submit">Submit</button>
            {/* <button type="submit" onClick={navigate('/')}>Cancel</button> */}
        </form>
            
        
    );
    
}
export default UpdateCar;