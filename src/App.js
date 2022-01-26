import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import UserCreate from './create-user';
import UserEdit from './edit-user'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <BrowserRouter>
          <div className='container'>
          <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="/create-user" element={<UserCreate />}/>
          <Route path="/edit-user/:id" element={<UserEdit />}/>
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
