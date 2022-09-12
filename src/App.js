import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Public from './pages/Public/Public.js';
import Backoffice from './pages/Backoffice/Backoffice.js';
import Contacts from './pages/Public/Contacts.js';
import Nosotros from './pages/Public/Nosotros.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Public />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/backoffice/' element={<Backoffice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
