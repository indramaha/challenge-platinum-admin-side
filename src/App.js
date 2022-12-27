import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/admin-login' element={<Login />}/>
    </Routes>
  );
}

export default App;
