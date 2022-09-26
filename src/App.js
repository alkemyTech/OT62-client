import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Public from "./pages/Public/Public.js";
import Backoffice from "./pages/Backoffice/Backoffice.js";
import { UserProvider } from "./context/UserProvider.js";
import { Provider } from "react-redux";
import store from './app/store';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <UserProvider>
            <div className="flex flex-col min-h-screen">
              <Routes>
                  <Route path='/*' element={<Public />}/>
                  <Route path='/backoffice/*' element={<Backoffice />}/>
              </Routes>
            </div>
          </UserProvider>
        </Provider>
      </Router>
    </>
  );
}

export default App;
