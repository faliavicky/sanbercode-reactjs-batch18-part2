import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Tugas9 from '../Tugas-9/tugas9';
import Tugas10 from '../Tugas-10/tugas10';
import Tugas11 from '../Tugas-11/tugas11';
import Tugas12 from '../Tugas-12/tugas12';
import Tugas13 from '../Tugas-13/tugas13';
import Tugas14 from '../Tugas-14/tugas14';
import './tugas15.css';
import Themes from './theme';

const Routes = () => {

    return(
        <Router>
            <div className="nav">
              < Themes />
            <ul>
          <li>
            <Link to="/" style={{textDecoration:'none'}}>Tugas 9</Link>
          </li>
          <li>
            <Link to="/tugas10" style={{textDecoration:'none'}}>Tugas 10</Link>
          </li>
          <li>
            <Link to="/tugas11" style={{textDecoration:'none'}}>Tugas 11</Link>
          </li>
          <li>
            <Link to="/tugas12" style={{textDecoration:'none'}}>Tugas 12</Link>
          </li><li>
            <Link to="/tugas13" style={{textDecoration:'none'}}>Tugas 13</Link>
          </li>
          <li>
            <Link to="/tugas14" style={{textDecoration:'none'}}>Tugas 14</Link>
          </li>
        </ul>
            </div>
        
        <Switch>
            <Route exact path="/">
                <Tugas9 />
            </Route>
            <Route exact path="/tugas10">
                <Tugas10 />
            </Route>
            <Route exact path="/tugas11">
                <Tugas11 />
            </Route>
            <Route exact path="/tugas12">
                <Tugas12 />
            </Route>
            <Route exact path="/tugas13">
                <Tugas13 />
            </Route>
            <Route exact path="/tugas14">
                <Tugas14 />
            </Route>
        </Switch>
        </Router>
    )
};

export default Routes;