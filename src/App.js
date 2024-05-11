
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'


export default function App() {


  const [progress, setprogress] = useState(0);




  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News setProgress={setprogress} key="general" pageSize={12} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setprogress} key="business" pageSize={12} country={"us"} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setprogress} key="entertainment" pageSize={12} country={"in"} category="entertainment" />
          </Route>
          <Route exact path="/home">
            <News setProgress={setprogress} key="general" pageSize={12} country={"in"} category="/general" />
          </Route>
          <Route exact path="/health">
            <News setProgress={setprogress} key="health" pageSize={12} country={"in"} category="health" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setprogress} key="science" pageSize={12} country={"in"} category="science" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setprogress} key="sports" pageSize={12} country={"in"} category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setprogress} key="technology" pageSize={12} country={"in"} category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  )

}



