import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from './components/Layout';
import PublicHome from './pages/PublicHome';
import StaffHome from './pages/StaffHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandsList from './pages/brands/BrandsList';
import BrandsAdd from './pages/brands/BrandsAdd';
import BrandsEdit from './pages/brands/BrandsEdit';
import StoresList from './pages/stores/StoresList';
import StoreAdd from './pages/stores/StoreAdd';
import StoreEdit from './pages/stores/StoreEdit';
import StaffEdit from './pages/staff/StaffEdit';
import StaffList from './pages/staff/StaffList';
import StaffAdd from './pages/staff/StaffAdd';
import ItemsList from './pages/items/ItemsList';
import ItemsAdd from './pages/items/ItemsAdd';
import ItemsEdit from './pages/items/ItemsEdit';

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
              <Route path='brandslist' element={<BrandsList/>}/>
              <Route path='brandsadd' element={<BrandsAdd/>}/>
              <Route path='brandsedit/:id' element={<BrandsEdit/>}/>
              <Route path='storeslist' element={<StoresList/>}/>
              <Route path='storesadd' element={<StoreAdd/>}/>
              <Route path='storesedit/:id' element={<StoreEdit/>}/>
              <Route path='itemslist' element={<ItemsList/>}/>
              <Route path='itemsadd' element={<ItemsAdd/>}/>
              <Route path='itemsedit/:id' element={<ItemsEdit/>}/>
              <Route path='stafflist' element={<StaffList/>}/>
              <Route path='staffadd' element={<StaffAdd/>}/>
              <Route path='staffedit/:id' element={<StaffEdit/>}/>
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
