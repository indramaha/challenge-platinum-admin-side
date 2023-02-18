import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AddCar from './Pages/AddCar';
import EditCar from './Pages/EditCar';
import ListCar from './Pages/ListCar';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './hoc/ProtectRoute';
import Register from './Pages/Register';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<ProtectedRoute />}>
        <Route path='/add-new-car' element={<AddCar />} />
        <Route path='/edit-car/:id' element={<EditCar />} />
        <Route path='/list-car' element={<ListCar/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route 
          path='/' 
          element={<Navigate to='/dashboard' element={<Dashboard />} />} 
        />
      </Route>
    </Routes>
  );
}

export default App;
