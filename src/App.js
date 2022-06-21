import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
// import { Provider } from 'react-redux';
import Nav from './Components/Navigation/nav';
// import store from './Redux/store';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div>
      {/* <Provider> */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
        </Routes>
      </Router>
      {/* </Provider> */}
    </div>
  );
}

export default App;
