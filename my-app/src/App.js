import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
/*import Tugas9 from './Tugas-9/tugas9';
import Tugas10 from './Tugas-10/tugas10';
import Tugas11 from './Tugas-11/tugas11';
import Tugas12 from './Tugas-12/tugas12';
import Tugas13 from './Tugas-13/tugas13';
import Tugas14 from './Tugas-14/tugas14';*/
import Routes from './Tugas-15/Routes';

function App() {
  return (
    <div>
     {/* < Tugas9 />
      < Tugas10 />
      < Tugas11 /> 
      < Tugas12 />
      < Tugas13 />
      < Tugas14 />*/}
      <Router>
        <Routes />
      </Router>

    </div>
  );
}

export default App;