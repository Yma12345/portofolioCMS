import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import classes from './App.module.css';
import MenuItems from './MenuItems';
import Data from './Data';
import PageSwitcher from './PageSwitcher';
import Cookies from 'js-cookie';
import axios from 'axios';
import { UserContext } from './UserContext';
import Login from './Login';
import Illustrator from './Illustrator';
import Indesign from './Indesign';
import CV from './CV.js';
import OverMij from './OverMij';
import Contact from './Contact';
import CMS from './CMS.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useContext(UserContext);
  //sets the productdata and the currentSelected feature

  useEffect(() => {
    if (Cookies.get("Bearertoken") && Cookies.get("Role")) {
      axios.defaults.headers.common = { 'Authorization': 'Bearer ' + Cookies.get("Bearertoken") };
      setUser({ role: Cookies.get("Role"), isLoggedIn: true });
    }
    else setUser({ role: null, isLoggedIn: false })
  }, [user.isLoggedIn])



  return (
    <div className="App">
      <Router>
        <MenuItems />
        <Routes>
          <Route path="/" element={<PageSwitcher />} />
          {user.isLoggedIn ? (
            <>
              }
              {user.role == "admin" ? (
                <>
                  <Route path="/home" element={<PageSwitcher />} />
                  <Route path="/illustrator" element={<Illustrator />} />
                  <Route path="/indesign" element={<Indesign />} />
                  <Route path="/cv" element={<CV />} />
                  <Route path="/overmij" element={<OverMij />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin" element={<CMS />} />
                </>
              ) : (null)
              }
            </>
          ) : (
              <>
                <Route path="/home" element={<PageSwitcher />} />
                <Route path="/illustrator" element={<Illustrator />} />
                <Route path="/indesign" element={<Indesign />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/overmij" element={<OverMij />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
        </Routes>
      </Router>
    </div>

  );
}


export default App;
