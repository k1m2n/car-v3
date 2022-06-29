/*eslint-disable*/
import { FaTimes} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
function CarItem({car,removeCar,setUpdateId}){

    function handleClick()
    {
        removeCar(car.id);
    }
    const navigate=useNavigate();
    function handleEdit()
    {
        
        setUpdateId(car.id);
        navigate('/UpdateCar');

    }

    return(
        
           <div>{car.regNo}
           <button onClick={handleClick}>
            <FaTimes color='purple'/>
           </button>
           <button onClick={handleEdit}>Edit</button>
           </div>
    )
           

}
export default CarItem;