import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from './components/Layout';
import PublicHome from './pages/PublicHome';
import StaffHome from './pages/StaffHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandsList from './pages/brands/BrandsList';
import BrandsAdd from './pages/brands/BrandsAdd';
import BrandsEdit from './pages/brands/BrandsEdit';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        {/* <Route path='newhome' element={<NewHome/>} /> */}
        <Route path= '/' element={<PublicHome/>} />
          {/* <Route element={<AuthProvider><Layout/></AuthProvider>}> */}
          <Route element={<Layout/>}>
            {/* <Route element={<LoginPage/>} path="/loginpage"/> */}
            {/* <Route  element={<PrivateRoutes/>}> */}
              {/* <Route path='/' element={<Home/>} exact/> */}
              <Route path='staffhome' element={<StaffHome/>} exact/>
              <Route path='brandslist' element={<BrandsList/>} exact/>
              <Route path='brandsadd' element={<BrandsAdd/>} exact/>
              <Route path='brandsedit/:id' element={<BrandsEdit/>} exact/>
              {/* <Route path="brandslist " element={<BrandsList/>}/>
              <Route path="brandsadd " element={<BrandsAdd/>}/>
              <Route path="brandsedit " element={<BrandsEdit/>}/> */}
              {/* <Route path="incidentinvestigationadd" element={<IncidentInvestigationAdd/>}/>
              <Route path="incidentinvestigationadd" element={<IncidentInvestigationAdd/>}/> */}
            {/* </Route>
            <Route element={<LoginPage/>} path="/loginpage"/> */}
          </Route>
        </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
