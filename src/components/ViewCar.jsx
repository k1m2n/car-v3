import { useEffect, useState } from "react";
import {Button,TextInput,Form,Stack,DataTable, TableRow,TableContainer,Table,TableHead,TableHeader,TableBody,TableCell,Tile} from '@carbon/react';
import axios from 'axios';


/*eslint-disable */
function ViewCar({viewCarId,cars})

{
    const [carView,setCarView]=useState([{
        id:"",
        email:"",
        regNo:"",
        userName:"",
        phoneNo:"",
        fromTime:"",
        toTime:"",
        slotNo:""

    }]);

    useEffect(()=>{
        const car= cars.filter((car) => car.id === viewCarId);
        // console.log(car[0].id);
        // setCarView({id:car[0].id,email:car[0].email,regNo:car[0].regNo,userName:car[0].userName,
        //     phoneNo:car[0].phoneNo,fromTime:car[0].fromTime,toTime:car[0].toTime});

            axios.get(`http://localhost:3000/car/${viewCarId}`)
    .then(response => {
      setCarView(response.data);
    console.log(response.data);

    })
    .catch(err => {
      console.log(err);
    })
    },[])
    return(

  //       <table>
  // <tr>
  //   <th>Reg No</th>
  //   <th>Phone No</th>
  //   <th>Email</th>
  //   <th>From</th>
  //   <th>To</th>
  //   <th>Slot No.</th>
  // </tr>
  // <tr>
  //   <td>{carView.regNo}</td>
  //   <td>{carView.phoneNo}</td>
  //   <td>{carView.email}</td>
  //   <td>{carView.fromTime}</td>
  //   <td>{carView.toTime}</td>
  //   <td>{carView.slotNo}</td>
  // </tr>
  // </table>

// <DataTable rows={carView}>
//     {({rows})=>(
//     <TableContainer>
//         <Table>
//             <TableHead>
//                 <TableRow>
//                     <TableHeader>Reg No</TableHeader>
//                     <TableHeader>Phone No</TableHeader>
//                     <TableHeader>Email</TableHeader>
//                     <TableHeader>From Time</TableHeader>
//                     <TableHeader>To Time</TableHeader>
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {/* {rows.map((row)=>(
//                     <TableRow key={row.id}>
//                         {row.cells.map((cell)=>{
//                             <TableCell key={cell.id}>{cell.value}</TableCell>
//                         })}
//                         </TableRow>
//                 ))} */}
                
//                     <TableRow key={1}>
                        
//                             <TableCell key={2}>bczb</TableCell>
                        
//                         </TableRow>
//                 {/* ))} */}
                
                
//             </TableBody>
//         </Table>
//     </TableContainer>
//     )}
// </DataTable> 

<Tile className="tile-container">
  <h5>Car Reg No :</h5>{carView.regNo}
  <h5>Slot No:</h5>{carView.slotNo}
  <h5>From Time:</h5>{carView.fromTime}
  <h5>To Time:</h5>{carView.toTime}
  <h5>Email:</h5>{carView.email}
  <h5>Username:</h5>{carView.userName}
  <h5>Phone No:</h5>{carView.phoneNo}
</Tile>

    );
// return(<h1>Hi</h1>);


}
export default ViewCar;