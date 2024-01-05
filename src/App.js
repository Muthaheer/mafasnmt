import logo from './logo.svg';
import './App.css';
import './index.css';

import LeftSidebar from './jsx/component/header/leftNav';
import {TopNav} from './jsx/component/header/topNav';
import Dashboard from './jsx/container/dashboard';
import { Routes, Route } from "react-router-dom";
import { CDT } from './jsx/container/decisionTree';
import { SignUpForm } from './jsx/container/register'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate()


  const displayNav = path === '/signup' ? false : true;

  useEffect(()=> {
    const name = localStorage.getItem('name');
    if(!name) {
        navigate('/signup')
    }
},[])

  return (
    <div className="flex flex-col  w-full h-full">

      <div className={`flex ${displayNav ? 'flex-1' : ''} w-full	 bg-[#1E293B]`}>
        {displayNav && <LeftSidebar />}
        <div className={` ${displayNav ? 'flex-1' : ''}  w-full	h-full`}>
          {displayNav && <TopNav/>}
          <div className='bg-slate-100 w-full	h-full '>
            <Routes>
              <Route path="/" element={<Dashboard />}>
              </Route>
              <Route path="/dct" element={<CDT/>}>
              </Route>
              <Route path="/signup" element={<SignUpForm />}>
              </Route>
            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
