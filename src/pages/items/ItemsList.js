import {useEffect , useState} from 'react'
import { ListGroup, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component'
import StoresAPI from '../../API/StoresAPI';
import ItemsAPI from '../../API/ItemsAPI';
import BrandsAPI from '../../API/BrandsAPI';

function ItemsList() {
    const [records, setRecords] = useState([]);
    const [stores, setStores] = useState([])
    const [items , setItems] = useState([])
    const [brands , setBrands] = useState([])

    useEffect(() => {
        fetchItems()
        fetchStores()
        fetchBrands()
    },[])

    const fetchStores = () => {
        StoresAPI.get('/')
        .then((res) => {
            setStores(res.data)
        })
        .catch(console.log)
        console.log()
    }

    const fetchBrands = () => {
        BrandsAPI.get('/')
        .then((res) => {
          setBrands(res.data)
        })
        .catch(console.log)
        console.log()
      }

    const fetchItems = () => {
        ItemsAPI.get('/')
        .then((res) => {
            setItems(res.data)
        })
        .catch(console.log)
        console.log()
    }

    const onDelete = (id) => {
        ItemsAPI.delete(`/${id}/`).then((res) => {
       fetchItems();
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
          name: 'Item',
          selector: (row) => row.item_name,
          sortable: true,
        },
        {
          name: 'Category',
          selector: (row) => row.category ,
          sortable: true,
        //   width: '10rem'
        },
        {
          name: 'Brand',
          selector: (row) => row.brand ,
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
          name: 'Identification Code',
          selector: (row) => row.identification_code ,
          sortable: true,
        //   width: '10rem'
        },
        {
          name: 'Size',
          selector: (row) => row.size ,
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
        const data = items.map((item) => {
         

            const kedai_store = stores.find((store) => store.id === item.store);
            const kedai = kedai_store ? `${kedai_store.store_name}` : '';

            const brand_branding = brands.find((brand) => brand.id === item.brand)
            const branding = brand_branding ? `${brand_branding.brand_name}` : '';


            // const employee_staff = staffs.find((staff) => staff.id === store.manager);
            // const employee = employee_staff ? `${employee_staff.staff_name} (${employee_staff.staff_position})` : '';
            return {
                id : item.id,
                item_name : item.item_name,
                category  : item.category ,
                brand : branding,
                store : kedai,
                identification_code : item.identification_code,
                size : item.size,
                edit: <Link to={`/itemsedit/${item.id}`}><FontAwesomeIcon icon={faPen } /></Link> ,
                delete : (<FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(item.id)}
              />
                )
            }
        })
        setRecords(data);
      }, [items]); 

  return (
    <div className="row justify-content-center"> 
    <h1 className="row justify-content-center mt-3">Item List</h1>
      <div className="mt-4 col-md-10 m row justify-content-center">
          
  <Button className="middle col-2 mb-4" variant="secondary" href="/itemsadd">
      Item Add
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

export default ItemsList
