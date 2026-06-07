import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Privacy from "./components/Privacy";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-2  sidebar">
            <Sidebar />
          </div>
          <div className="col-lg-10 dashboard">
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Products" element={<Products />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
