/*eslint-disable*/
import { FaTimes} from "react-icons/fa";
import {useNavigate,Link} from "react-router-dom";
import {useEffect} from 'react';
function CarItem({car,removeCar,setUpdateId,setViewCarId}){

    const navigate=useNavigate();
    function handleView(){
        setViewCarId(car.id);
        navigate('/ViewCar');

    }

        
   
    

    function handleClick()
    {
        removeCar(car.id);
    }
    
    function handleEdit()
    {
        
        setUpdateId(car.id);
        navigate('/UpdateCar');

    }

    return(
        
           <div>
            
            {car.regNo}
            <button onClick={handleView}>View</button>
           <button onClick={handleEdit}>Edit</button>
           <button onClick={handleClick}>
            <FaTimes color='purple'/>
           </button>
           </div>
    )
           

}
export default CarItem;