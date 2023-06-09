import './App.css';
import About from './components/About';
import ActiveUser from './components/ActiveUser';
import Home from './components/Home';
import Header from './layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tail from './components/Tail';
import Login from './components/Login';
import Register from './components/Register';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {
            user ? (
              <>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/tail' element={<Tail />} />
                <Route path='/activeUser' element={<ActiveUser />} />
              </>
            ) : (
              <>
                <Route path='/login' element={user ? <Home /> : <Login />} />
                <Route path='/register' element={user ? <Home /> : <Register />} />
              </>
            )
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
