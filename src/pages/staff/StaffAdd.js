import {useState , useEffect} from 'react'
import StoresAPI from '../../API/StoresAPI';
import StaffAPI from '../../API/StaffAPI';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function StaffAdd() {
    const [stores , setStores] = useState([])
    const [staffs , setStaffs] = useState([])
    const [staff_name , setStaffName] = useState('')
    const [staff_position , setStaffPosition] = useState('')
    const [staff_smartcard_number , setStaffSmartcardNumber] = useState('')
    const [staff_smartcard_color , setStaffSmartcardColor] = useState('')
    const [staff_date_of_birth , setStaffDateOfBirth] = useState('')
    const [joining_date , setJoiningDate] = useState('')
    const [home_address , setHomeAddress] = useState('')
    const [nationality , setNationality] = useState('')
    const [citizenship , setCitizenship] = useState('')
    const [telephone_number , setTelephoneNumber] = useState('')
    const [email_address , setEmailAddress] = useState('')
    const [mobile_number , setMobileNumber] = useState('')
    const [store , setStore] = useState('')
    const navigate = useNavigate()

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
      }
    
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
          staff_name,
          staff_position,
          staff_smartcard_number,
          staff_smartcard_color,
          staff_date_of_birth,
          joining_date,
          home_address,
          nationality,
          citizenship,
          telephone_number,
          email_address,
          mobile_number,
          store,
        }
        navigate(-1)
        StaffAPI.post('/', item).then(() => fetchStaff())
        .catch((error) => {
          console.log("Error: ", error);
        })
      }
    


  return (
    <div className="staffeditpage">
    <div className="container pb-5">
    <div className="row">
      <div className= "col-md-4"></div>
      <div className="col-md-4 ">
        <h3 className="float-left mt-3">Add Staff</h3>
        
        <Form onSubmit={onSubmit} 
        className="mt-4">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Staff Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Staff Name"
              value={staff_name}
              onChange={(e) => setStaffName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Staff Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Staff Position"
              value={staff_position}
              onChange={(e) => setStaffPosition(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Staff Smartcard Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Staff Smartcard Number"
              value={staff_smartcard_number}
              onChange={(e) => setStaffSmartcardNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Staff Smartcard Color</Form.Label>
            <Form.Control
              type="text"
              placeholder="taff Smartcard Color"
              value={staff_smartcard_color}
              onChange={(e) => setStaffSmartcardColor(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Citizenship</Form.Label>
            <Form.Control
              type="text"
              placeholder="Citizenship"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Staff Date Of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Staff Date Of Birth"
                    value={staff_date_of_birth}
                    onChange={(e) => setStaffDateOfBirth(e.target.value)}
                  />
                </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Joining Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Joining Date"
                    value={joining_date}
                    onChange={(e) => setJoiningDate(e.target.value)}
                  />
                </Form.Group>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              value={email_address}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Home Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Home Address"
              value={home_address}
              onChange={(e) => setHomeAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Telephone Number"
              value={telephone_number}
              onChange={(e) =>  setTelephoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Mobile Number"
              value={mobile_number}
              onChange={(e) =>  setMobileNumber(e.target.value)}
            />
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
  </div>
  )
}

export default StaffAdd
