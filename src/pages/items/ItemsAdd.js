import {useState , useEffect} from 'react'
import StoresAPI from '../../API/StoresAPI';
import ItemsAPI from '../../API/ItemsAPI';
import BrandsAPI from '../../API/BrandsAPI';
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import { Link , useNavigate } from 'react-router-dom';

function ItemsAdd() {
  const [brands , setBrands] = useState([])
  const [stores , setStores] = useState([])
  const [items , setItems] = useState([])
  const [item_name , setItemName] = useState('')
  const [category , setCategory] = useState('')
  const [ dollar_value , setDollarValue] = useState('')
  const [brand , setBrand] = useState('')
  const [store , setStore] = useState('')
  const [identification_code, setIdentificationCode] = useState('')
  const [size , setSize] = useState('')
  const [country_of_origin , setCountryOfOrigin] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetchBrands()
    fetchStores()
    fetchItems()
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

const onSubmit = (e) => {
  e.preventDefault()
  let item = {
    item_name,
    category,
    dollar_value,
    brand,
    store, 
    identification_code,
    size,
    country_of_origin,
  }
  navigate(-1)
  ItemsAPI.post('/', item).then(() => fetchItems())
  .catch((error) => {
    console.log("Error: ", error);
  })
}



  return (
    <div className="container pb-5">
    <div className="row">
      <div className= "col-md-4"></div>
      <div className="col-md-4 ">
        <h3 className="float-left mt-3">Add Item</h3>
        
        <Form onSubmit={onSubmit} 
        className="mt-4">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Name"
              value={item_name}
              onChange={(e) => setItemName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Dollar Value</Form.Label>
            <Form.Control
              type="number"
              placeholder="Dollar Value"
              value={dollar_value}
              onChange={(e) => setDollarValue(e.target.value)}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    as ="select"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option value=''>Select An Option</option>
                {brands.map(brand => {
                  return <option key={brand.id} value={brand.id}>{brand.brand_name}</option>
                })}

                  </Form.Control>
                </Form.Group>
          
          <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Store</Form.Label>
                  <Form.Control
                    as ="select"
                    placeholder="Store"
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                  >
                    <option value=''>Select An Option</option>
                {stores.map(store => {
                  return <option key={store.id} value={store.id}>{store.store_name}</option>
                })}

                  </Form.Control>
                </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Identification Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Identification Code"
              value={identification_code}
              onChange={(e) => setIdentificationCode(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Country Of Origin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country Of Origin"
              value={country_of_origin}
              onChange={(e) => setCountryOfOrigin(e.target.value)}
            />
          </Form.Group>


          
         
         
          
          <div className="mt-3 float-right">
            <Button
              variant="primary"
              type="submit"
              onClick={onSubmit}
              className="mx-2"
            >
              Save
            </Button>
          </div>
        </Form>    
      </div>            
    </div>
  </div>
  )
}

export default ItemsAdd
