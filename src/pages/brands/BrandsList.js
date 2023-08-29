import {useEffect , useState} from 'react'
import {  Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component'
import BrandsAPI from '../../API/BrandsAPI';

function BrandsList() {

    const [records, setRecords] = useState([]);
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetchBrands()
    },[])

    const fetchBrands = () => {
        BrandsAPI.get('/')
        .then((res) => {
            setBrands(res.data)
        })
        .catch(console.log)
        console.log()
    }

    const onDelete = (id) => {
        BrandsAPI.delete(`/${id}/`).then((res) => {
       fetchBrands();
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
          name: 'Brand Name',
          selector: (row) => row.brand_name,
          sortable: true,
        },
        {
          name: 'Brand Type',
          selector: (row) => row.type_of_brand,
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
        const data = brands.map((brand) => {
            return {
                id : brand.id,
                brand_name : brand.brand_name,
                type_of_brand : brand.type_of_brand,
                edit: <Link to={`/brandsedit/${brand.id}`}><FontAwesomeIcon icon={faPen } /></Link> ,
                delete : (<FontAwesomeIcon
                icon={faTrash}
                onClick={() => onDelete(brand.id)}
              />
                )
            }
        })
        setRecords(data);
      }, [brands]);
      
      
      const handleFilter = (e) => {
        const searchText = e.target.value.toLowerCase();
      
        if (searchText === '') {
          // If the search text is empty, fetch all incidents again
          fetchBrands();
        } else {
          const newData = brands.filter((brand) => {
              const incidentProps = Object.values(brand);
              for (let i = 0; i < incidentProps.length; i++) {
                if (
                  incidentProps[i] &&
                  incidentProps[i].toString().toLowerCase().includes(searchText)
                ) {
                  return true; 
                }
              }
              return false;
            });
          setBrands(newData);
        }
      };
  

  return (
    <div className="brandpage">
    <div className="row justify-content-center"> 
    <h1 className="row justify-content-center mt-3">Brands List</h1>
      <div className="mt-4 col-md-10 m row justify-content-center">
          
  <Button className="middle col-2 mb-4" variant="secondary" href="/brandsadd">
      Brands Add
  </Button>
  <div className="col-md-2 mb-4"><input className="text-center" type="text" placeholder="Search..." onChange={handleFilter}/></div>


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
</div>
  )
}

export default BrandsList
