import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Students from "./components/Students";
import AddStudents from "./components/Addstudents";
import UpdateStudentsData from "./components/UpdateStudentData";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Addbooks from "./components/Addbooks";
import Fees from "./components/Fees";

//Import charts file and other static files//
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Radar, Line, Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = "#333";

function App() {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  return (
    <>
      {url === "/login" ? null : <Navbar />}
      <div className="container-fluid p-0">
        <div className="row g-0">
          {url === "/login" ? null : (
            <div className="col-lg-2  sidebar">
              <Sidebar />
            </div>
          )}
          <div className="col-lg-10 dashboard">
            <Routes>
              <Route path="*" element={<Navigate to="/login" replace />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Login" element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/addstudents" element={<AddStudents />} />
                <Route
                  path="/updatestudentdata"
                  element={<UpdateStudentsData />}
                />
                <Route path="/fees" element={<Fees />} />
                <Route path="/addbooks" element={<Addbooks />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
