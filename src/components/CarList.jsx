/*eslint-disable*/
import CarItem from "./CarItem";
function CarList({cars,removeCar}){

    return(
        <div>
            {cars.map(car=> (
                <CarItem key={car.id} car={car} removeCar={removeCar}/>
            
            ))}
        </div>
    )

}
export default CarList;