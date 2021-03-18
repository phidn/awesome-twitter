import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Header from "./components/Header"
import Login from "./components/Login"
import Register from "./components/Register"
import AppContext from "./components/AppContext";
import { useSelector } from "react-redux";

export default function App() {
  const state = useSelector(state => state.AppReducer);
  return (
    <Router>
      <div className="container">
        <AppContext.Provider value={{ state }}>
          <Header/>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="*">
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </AppContext.Provider>
      </div>
    </Router>
  )
}
