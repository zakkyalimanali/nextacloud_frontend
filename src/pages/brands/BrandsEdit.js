import React , {useEffect , useState} from 'react'
import BrandsAPI from '../../API/BrandsAPI'
import axios from 'axios'
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import { Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

function BrandsEdit() {
  const [brands , setBrands] = useState([])
  const [brand_name , setBrandName] = useState('')
  const [type_of_brand , setTypeOfBrand] = useState('')
  const [id , setId] = useState(null)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    fetchBrands()
    setId(params.id)
  },[params.id])

  const fetchBrands = () => {
    axios.get(`http://127.0.0.1:8000/nextacloudapp/brands/${params.id}`)
    .then((res) => {
      setBrands(res.data)
      setBrandName(res.data.brand_name)
      setTypeOfBrand(res.data.type_of_brand)
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

  const onUpdate = (id) => {
    let item = {
      brand_name,
      type_of_brand,
  }
  BrandsAPI.patch(`/${id}/`, item).then(() => {
    setBrandName('')
    setTypeOfBrand('')
    fetchBrands()
  })
  navigate(-1)
}
  
  return (
    <div className="container pb-5">
    <div className="row">
      <div className= "col-md-4"></div>
      <div className="col-md-4 ">
        <h3 className="float-left mt-3">Create a JSA</h3>
        
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
            {/* <Button
              variant="primary"
              type="submit"
              onClick={onSubmit}
              className="mx-2"
            >
              Save
            </Button> */}
            <Button
                    variant="warning"
                    type="button"
                    onClick={(e) => onUpdate(id)}
                    className="mx-2"
                  >
                    Update
                  </Button>
          </div>
        </Form>    
      </div>            
    </div>
  </div>
  )
}

export default BrandsEdit
