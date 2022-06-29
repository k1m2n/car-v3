/*eslint-disable*/
import { FaTimes} from "react-icons/fa";
function CarItem({car,removeCar}){

    function handleClick()
    {
        removeCar(car.id);
    }

    return(
        
           <div>{car.regNo}
           <button onClick={handleClick}>
            <FaTimes color='purple'/>
           </button>
           </div>
    )
           

}
export default CarItem;