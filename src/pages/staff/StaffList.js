import {useEffect , useState} from 'react'
import { ListGroup, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component'
import StaffAPI from '../../API/StaffAPI';
import StoresAPI from '../../API/StoresAPI';

function StaffList() {
    const [records, setRecords] = useState([]);
    const [staffs , setStaffs] = useState([])
    const [stores , setStores] = useState([])
    

    useEffect(() => {
        fetchStaff()
        fetchStores()
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
        StaffAPI.delete(`/${id}/`).then((res) => {
       fetchStaff();
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
          name: 'Staff Name',
          selector: (row) => row.staff_name,
          sortable: true,
        },
        {
          name: 'Staff Position',
          selector: (row) => row.staff_position,
          sortable: true,
        //   width: '10rem'
        },
        {
          name: 'Store',
          selector: (row) => row.store,
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
        const data = staffs.map((staff) => {
            const kedai_store = stores.find((store) => store.id === staff.store);
            const kedai = kedai_store ? `${kedai_store.store_name}` : '';
            // const kedai = kedai_store ? `${kedai_store.staff_name} (${employee_staff.staff_position})` : '';
            return {
                id : staff.id,
                staff_name : staff.staff_name,
                staff_position : staff.staff_position,
                store: kedai,
                edit: <Link to={`/staffedit/${staff.id}`}><FontAwesomeIcon icon={faPen } /></Link> ,
                delete : (<FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(staff.id)}
              />
                )
            }
        })
        setRecords(data);
      }, [staffs]);


  return (
    <div className="row justify-content-center"> 
    <h1 className="row justify-content-center mt-3">Staff List</h1>
      <div className="mt-4 col-md-10 m row justify-content-center">
          
  <Button className="middle col-2 mb-4" variant="secondary" href="/staffadd">
      Staff Add
  </Button>
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

export default StaffList
