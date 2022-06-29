/*eslint-disable*/
import CarItem from "./CarItem";
function CarList({cars,removeCar,setUpdateId}){

    return(
        <div>
            {cars.map(car=> (
                <CarItem key={car.id} car={car} removeCar={removeCar} setUpdateId={setUpdateId} />
            
            ))}
        </div>
    )

}
export default CarList;