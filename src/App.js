/*eslint-disable*/
import './App.css';
import CarForm from './components/CarForm';
import Header from './components/Header';
import {useEffect,useState} from "react";
import CarList from './components/CarList';

function App() {

  const LOCAL_STORAGE_KEY="react-park-list";
  const [cars, setCars]=useState([]);


  useEffect(()=>{
    const storageCars = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageCars)
    {
      setCars(storageCars);
    }
  },[])
  
  useEffect(()=>{
  
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(cars));
  },[cars]);

  function addCars(car){
    setCars([car,...cars]);
    console.log(car.id);
  }

  function removeCar(id)
{
  //filter function will work such that it will keep all the todos whose todo.id!=id
  setCars(cars.filter(car => car.id!==id));
}

  return (
    <div className="App">
      <Header className='App-Header'/>

      <h1>Hi</h1>
      <CarForm addCars={addCars}/>
      <CarList cars={cars} removeCar={removeCar}/>
    </div>
  );
}

export default App;
