/*eslint-disable*/
import './App.scss';
import CarForm from './components/CarForm';
import Header from './components/Header';
import {useEffect,useState} from "react";
import CarList from './components/CarList';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import UpdateCar from './components/UpdateCar';

function App() {

  const LOCAL_STORAGE_KEY="react-park-list";
  const [cars, setCars]=useState([]);
  const[updateId,setUpdateId]=useState("");


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
    //console.log(car.id);
  }

  function removeCar(id)
{
  //filter function will work such that it will keep all the todos whose todo.id!=id
  setCars(cars.filter(car => car.id!==id));
}

  return (
    <div className="App">
      <Router>

      <Header className='App-Header'/>

      <nav>
      <Link to="/">Home </Link>
      <Link to="/CarList">View List </Link>
      
      </nav>
      {/* <CarForm addCars={addCars}/> */}
      
      
      
        <Routes>
        <Route path='/' element={<CarForm addCars={addCars}/>} />
          <Route path='/CarList' element={<CarList cars={cars} removeCar={removeCar} setUpdateId={setUpdateId} />} />
          <Route path='/UpdateCar' element={<UpdateCar updateId={updateId} cars={cars} setCars={setCars} />} />
        </Routes>
      </Router>
      {/* <CarList cars={cars} removeCar={removeCar}/> */}
    </div>
  );
}

export default App;
