import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AddCar from './Pages/AddCar';
import EditCar from './Pages/EditCar';
import ListCar from './Pages/ListCar';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './hoc/ProtectRoute';

const App = () => {
  return (
    <Routes>
      <Route path='/admin-login' element={<Login />}/>
      <Route path='/add-new-car' element={<AddCar />} />
      <Route path='/edit-car' element={<EditCar />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/list-car' element={<ListCar />} />
      <Route path='/' element={<Login />}/>
      <Route element={<ProtectedRoute />}>
        <Route path='/add-new-car' element={<AddCar />} />
        <Route path='/edit-car/:id' element={<EditCar />} />
        <Route path='/list-car' element={<ListCar/>} />

      </Route>
    </Routes>
  );
}

export default App;
