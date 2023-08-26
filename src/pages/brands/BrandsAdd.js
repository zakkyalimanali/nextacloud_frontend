import {useState , useEffect} from 'react'
import BrandsAPI from '../../API/BrandsAPI'
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import { Link , useNavigate } from 'react-router-dom';


function BrandsAdd() {
  const [brands , setBrands] = useState([])
  const [brand_name , setBrandName] = useState('')
  const [type_of_brand , setTypeOfBrand] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchBrands()
  },[])

  const fetchBrands = () => {
    BrandsAPI.get('/')
    .then((res) => {
      setBrands(res.data)
    })
    .catch(console.log)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let item = {
      brand_name,
      type_of_brand,
    }
    navigate(-1)
    BrandsAPI.post('/', item).then(() => fetchBrands())
    .catch((error) => {
      console.log("Error: ", error);
    })
  }


  return (
    <div className="container pb-5">
          <div className="row">
            <div className= "col-md-4"></div>
            <div className="col-md-4 ">
              <h3 className="float-left mt-3">Add Brand</h3>
              
              <Form onSubmit={onSubmit} 
              className="mt-4">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Brand Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Brand Name"
                    value={brand_name}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                </Form.Group>
                
               
               
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Type of Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Type of Brand"
                    value={type_of_brand}
                    onChange={(e) => setTypeOfBrand(e.target.value)}
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

export default BrandsAdd
