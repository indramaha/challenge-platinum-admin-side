import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AddCar from './Pages/AddCar';
import EditCar from './Pages/EditCar';
import ListCar from './Pages/ListCar';

const App = () => {
  return (
    <Routes>
      <Route path='/admin-login' element={<Login />}/>
      <Route path='/add-new-car' element={<AddCar />} />
      <Route path='/edit-car/:id' element={<EditCar />} />
      <Route path='/list-car' element={<ListCar/>} />
    </Routes>
  );
}

export default App;
