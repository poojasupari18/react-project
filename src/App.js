
import React from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from './Context/UserContext'
import Layout from './Core/Layout';
import MainRouter from './MainRouter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider>
      <Layout>
       <MainRouter />
       </Layout >
       </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
