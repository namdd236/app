import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./App.css";

import Clock from "./assets/component/clock";
import Login from "./assets/component/login/login";
import Header from "./header";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
      </header> */}
      {/* <Login /> */}
      <NavLink to="/login" ><button>GHE</button></NavLink>
      <Routes>
        {/* <Route path="/courses" component={Courses} />
              <Route path="/courses" component={Courses} /> */}
        <Route path="/" element={ <Header/>} />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App;
