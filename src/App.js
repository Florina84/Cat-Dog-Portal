import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
       <Navbar/> 

        <Switch>
          <Route path="/Upload">
            <Upload/>
          </Route>
          <Route path="/myImages">
            <MyImages/>
          </Route>
          <Route path="/publicImages">
            <PublicImages/>
          </Route>
        </Switch>

      </Router>
      
      {/* <MyImages></MyImages>
      <Upload></Upload>
      <PublicImages></PublicImages> */}
  
    </> 
  );
}

export default App;
