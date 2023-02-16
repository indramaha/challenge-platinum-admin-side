import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AddCar from './Pages/AddCar';
import EditCar from './Pages/EditCar';
import ListCar from './Pages/ListCar';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path='/admin-login' element={<Login />}/>
      <Route path='/add-new-car' element={<AddCar />} />
      <Route path='/edit-car' element={<EditCar />} />
    </Routes>
  );
}

export default App;
