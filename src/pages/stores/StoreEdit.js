import React , {useEffect , useState} from 'react'
import StaffAPI from '../../API/StaffAPI';
import StoresAPI from '../../API/StoresAPI';
import axios from 'axios'
import { Button, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router'

function StoreEdit() {
  const [stores , setStores] = useState([])
  const [staffs , setStaffs] = useState([])
  const [store_name , setStoreName] = useState('')
  const [store_address , setStoreAddress] = useState('')
  const [manager , setManager] = useState('')
  const [id , setId] = useState(null)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    fetchStores()
    setId(params.id)
  },[params.id])

  const fetchStores = () => {
    axios.get(`http://127.0.0.1:8000/nextacloudapp/stores/${params.id}`)
    .then((res) => {
      setStores(res.data)
      setStoreName(res.data.store_name)
      setStoreAddress(res.data.store_address)
      setManager(res.data.manager)
    })
    .catch(console.log)
  }

  useEffect(() => {
    fetchStaff()
  },[]) 

  const fetchStaff = () => {
    StaffAPI.get('/')
    .then((res) => {
      setStaffs(res.data)
    })
    .catch(console.log)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let item = {
      store_name,
      store_address,
      manager,
    }
    navigate(-1)
    StoresAPI.post('/', item).then(() => fetchStores())
    .catch((error) => {
      console.log("Error: ", error);
    })
  }

  const onUpdate = (id) => {
    let item = {
      store_name,
      store_address,
      manager,
    }
  StoresAPI.patch(`/${id}/`, item).then(() => {
    setStoreName('')
    setStoreAddress('')
    setManager('')
    fetchStores()
  })
  navigate(-1)
}


  return (
    <div className="storepage">
    <div className="container pb-5">
    <div className="row">
      <div className= "col-md-4"></div>
      <div className="col-md-4 ">
        <h3 className="float-left mt-3">Update Store</h3>
        
        <Form onSubmit={onSubmit} 
        className="mt-4">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Store Name"
              value={store_name}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Store Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Store Address"
              value={store_address}
              onChange={(e) => setStoreAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Manager</Form.Label>
                  <Form.Control
                    as ="select"
                    placeholder="Manager"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                  >
                    <option value=''>Select An Option</option>
                {staffs.map(staff => {
                  return <option key={staff.id} value={staff.id}>{staff.staff_name} ({staff.staff_position})</option>
                })}

                  </Form.Control>
                </Form.Group>
        
          
          <div className="mt-3 float-right">
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
  </div>
  )
}

export default StoreEdit
