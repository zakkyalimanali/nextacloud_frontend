import {useEffect , useState} from 'react'
import { ListGroup, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component'
import StoresAPI from '../../API/StoresAPI';
import StaffAPI from '../../API/StaffAPI';

function StoresList() {
    const [records, setRecords] = useState([]);
    const [stores, setStores] = useState([])
    const [staffs , setStaffs] = useState([])

    useEffect(() => {
        fetchStores()
        fetchStaff()
    },[])

    const fetchStores = () => {
        StoresAPI.get('/')
        .then((res) => {
            setStores(res.data)
        })
        .catch(console.log)
        console.log()
    }

    const fetchStaff = () => {
        StaffAPI.get('/')
        .then((res) => {
            setStaffs(res.data)
        })
        .catch(console.log)
        console.log()
    }

    const onDelete = (id) => {
        StoresAPI.delete(`/${id}/`).then((res) => {
       fetchStores();
         }).catch(console.log)
     }

     const customStyles = {
        headCells : {
          style: {
            border: '1px solid black',
    
          },
            },
        cells : {
          style: {
            border: '1px solid black'
          },
        },
    }

    const columns = [
        {
          name: 'Id',
          selector: (row) => row.id,
          sortable: true,
          width: '6rem'
        },
        {
          name: 'Store Name',
          selector: (row) => row.store_name,
          sortable: true,
        },
        {
          name: 'Store Address',
          selector: (row) => row.store_address,
          sortable: true,
        //   width: '10rem'
        },
        {
          name: 'Manager',
          selector: (row) => row.manager,
          sortable: true,
        //   width: '10rem'
        },
        
        {
          name: 'Edit',
          selector: (row) => row.edit,
          width: '6rem'
        },
        {
          name: 'Delete',
          selector: (row) => row.delete,
          width: '6rem'
        },
      ];

      useEffect(() => {
        const data = stores.map((store) => {
            const employee_staff = staffs.find((staff) => staff.id === store.manager);
            const employee = employee_staff ? `${employee_staff.staff_name} (${employee_staff.staff_position})` : '';
            return {
                id : store.id,
                store_name : store.store_name,
                store_address : store.store_address,
                manager: employee,
                edit: <Link to={`/storesedit/${store.id}`}><FontAwesomeIcon icon={faPen } /></Link> ,
                delete : (<FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(store.id)}
              />
                )
            }
        })
        setRecords(data);
      }, [stores]); 

      const handleFilter = (e) => {
        const searchText = e.target.value.toLowerCase();
      
        if (searchText === '') {
          // If the search text is empty, fetch all incidents again
          fetchStores();
          
        } else {
          const newData = stores
            .map((store) => {
            const person_name = staffs.find(
              (staff) => staff.id === store.manager
            )?.staff_name;
            return {
              ...store,
              person_name,
            };
          }).filter((store) => {
              const incidentProps = Object.values(store);
              for (let i = 0; i < incidentProps.length; i++) {
                if (
                  incidentProps[i] &&
                  incidentProps[i].toString().toLowerCase().includes(searchText)
                ) {
                  return true; // Return true if a match is found in any property
                }
              }
              return false; // Return false if no match is found in any property
            });
          setStores(newData);
        }
      };
  
    
  return (
    <div className="row justify-content-center"> 
    <h1 className="row justify-content-center mt-3">Stores List</h1>
      <div className="mt-4 col-md-10 m row justify-content-center">
          
  <Button className="middle col-2 mb-4" variant="secondary" href="/storesadd">
      Store Add
  </Button>
  <div className="col-md-2 mb-4"><input className="text-center" type="text" placeholder="Search..." onChange={handleFilter}/></div>
  {/* <div className="text-end"><input type="text" onChange={handleFilter}/></div> */}
  {/* <div className="text-end"><input type="text" /></div> */}
      

    <DataTable className='table-container mb-5' 
           customStyles={customStyles}
           columns={columns}
           data={records}
           selectableRows
           fixedHeader
           pagination
        >

        </DataTable>

  </div>
</div>
  )
}

export default StoresList
