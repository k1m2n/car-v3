/*eslint-disable*/
import CarItem from "./CarItem";
import {useNavigate} from "react-router-dom";
import {Button,TextInput,Form,Stack,DataTable, TableRow,TableContainer,Table,TableHead,TableHeader,TableBody,TableCell,Link, CodeSnippetSkeleton
,TableToolbar,TableToolbarSearch,TableToolbarAction,TableToolbarContent,TableToolbarMenu} from '@carbon/react';

// import {
//     DataTable,
//     Table,
//     TableHead,
//     TableRow,
//     TableHeader,
//     TableBody,
//     TableCell,
//   } from 'carbon-components-react';
import axios from'axios';
import { useEffect,useState } from "react";
function CarList({cars,removeCar,setUpdateId,setViewCarId}){

const [carsList,setCarsList]=useState([]);
const [deleteClick,setDeleteClick]=useState(false);
  useEffect(()=>{
    axios.get('http://localhost:3000/car')
    .then(response => {
      console.log("I am in useEffect of CarsList component",response.data);
      setCarsList(response.data);
    })
    .catch(err => {
      console.log(err);
    })

  },[deleteClick])

    const navigate=useNavigate();
    function handleView(e){
       const id=e.target.value;
    //    console.log('View id ',id);
    //    //console.log(id.split(':'));
    //    const tempId=id.split(':');
    //    console.log(tempId);
    //    console.log(tempId[0]);
    //    const tempId1=tempId[0];
    //    console.log(tempId1);
        setViewCarId(id);
        navigate('/ViewCar');
    console.log('handleViewTriggered');

    }

        
   
    

    function handleClick(e)
    {
        const id=e.target.value
        removeCar(id);
        axios.delete(`http://localhost:3000/car/${id}`)
    .then(response =>{ 
      console.log(response.data);
      setCarsList(response.data);
      setDeleteClick(true);
  });
    }
    
    function handleEdit(e)
    {
        const id=e.target.value;
        console.log("axios Id in handlr edit button clicked ",id);
        setUpdateId(id);
        navigate('/UpdateCar');

    }

    function handleAddNew(e)
    {
      navigate('/AddNew');
    }

    console.log(cars.length);
    const rows = [
        {
          id: 'a',
          name: 'Load balancer 1',
          status: 'Disabled',
        },
        {
          id: 'b',
          name: 'Load balancer 2',
          status: 'Starting',
        },
        {
          id: 'c',
          name: 'Load balancer 3',
          status: 'Active',
        },
      ];

      const headers = [

        {
            key: 'ticketId',
            header: 'Ticket ID',
          }
        
        // {
        //   key: 'regNo',
        //   header: 'Reg No',
        // },
        // {
        //     key: 'email',
        //     header: 'Email',
        //   },
        // {
        //     key: 'userName',
        //     header: 'Username',
        //   },
        //   {
        //     key: 'phoneNo',
        //     header: 'Phone No',
        //   },
        //   {
        //     key: 'fromTime',
        //     header: 'From Time',
        //   },
        //   {
        //     key: 'toTime',
        //     header: 'To Time',
        //   }
      ];

      function onInputChange(e)
      {
        console.log("I am in search");
        const ticketId=e.target.value;
        return carsList.find(car=>{
          return car.ticketId===ticketId;
        })
      }

      return(
        <div className="container">
        <DataTable rows={carsList} headers={headers}>
  {({ rows, headers, getTableProps, getHeaderProps, getRowProps,onInputChange }) => (

<TableContainer title="Parking Lot Management System">
            <TableToolbar >
            {/* pass in `onInputChange` change here to make filtering work */}
            <TableToolbarSearch onChange={onInputChange} />
            <TableToolbarContent>
              <TableToolbarMenu>
                {/* <TableToolbarAction
                  icon={iconDownload}
                  iconDescription="Download"
                  onClick={action('TableToolbarAction - Download')}
                />
                <TableToolbarAction
                  icon={iconEdit}
                  iconDescription="Edit"
                  onClick={action('TableToolbarAction - Edit')}
                />
                <TableToolbarAction
                  icon={iconSettings}
                  iconDescription="Settings"
                  onClick={action('TableToolbarAction - Settings')}
                /> */}
              </TableToolbarMenu>
              <Button onClick={handleAddNew} small kind="primary">
                Add new
              </Button>
            </TableToolbarContent>
            </TableToolbar>

    <Table {...getTableProps()}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader {...getHeaderProps({ header })}>
              {header.header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow {...getRowProps({ row })}>
            {row.cells.map((cell) => (
              <TableCell key={cell.id} value={row.id}>
                {/* <link onClick={handleView(cell.id)}  >
                {cell.value}
                </link> */}
                <Button kind="ghost" onClick={handleView} value={row.id} isSelected={false}>
                {cell.value} 
                </Button>
                {/* {cell.value} */}
                </TableCell>
            ))}
             {/* <Button onClick={handleView} value={row.id} isSelected={false}>View</Button> */}
            <Button onClick={handleEdit} value={row.id}>Edit</Button> 
           <Button onClick={handleClick} value={row.id}>
            Delete
           {/* <FaTimes color='purple'/> */}
           </Button>
          </TableRow>
        ))}
        
      </TableBody>
    </Table>
 
  </TableContainer>
   )}
</DataTable>
</div>

      )
//     const headers=[{
//         key:'id',
//         header:'id'
//     }]
//     const dummy=[1,2,3,4];

//     return(
//         <div>
//             {/* {cars.map(car=> (
//                 <CarItem key={car.id} car={car} removeCar={removeCar} setUpdateId={setUpdateId} setViewCarId={setViewCarId}/>
            
//             ))} */}
//             <DataTable rows={}>
//   {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
//     <Table {...getTableProps()}>
//       {/* <TableHead>
//         <TableRow>
//           {headers.map((header) => (
//             <TableHeader {...getHeaderProps({ header })}>
//               {header.header}
//             </TableHeader>
//           ))}
//         </TableRow>
//       </TableHead> */}
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow {...getRowProps({ row })}>
//             {row.cells.map((cell) => (
//               <TableCell key={cell.id}>{cell.value}</TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   )}
// </DataTable>
//         </div>
//     )

}
export default CarList;