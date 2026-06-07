import Side from "../styles/sidebar.module.css";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className={`container`}>
        <div className={`row `}>
          <div className={`col-12 ${Side.sidebar} p-0`}>
            <div className="card rounded-0 p-0 border-0">
              <ul className={`list-group ${Side.bar_link} rounded-0`}>
                <li className={`list-group-item`}>
                  <Link to="/">
                    <b>Dashboard</b>
                  </Link>
                </li>

                <li className={`list-group-item`}>
                  <Link to="/Registration">
                    <b>Registration</b>
                  </Link>
                </li>

                <li className={`list-group-item`}>
                  <Link to="/Login">
                    <b>Login</b>
                  </Link>
                </li>

                <li className={`list-group-item`}>
                  <Link to="/Products">
                    <b>Products</b>
                  </Link>
                </li>
                {/* 
              
                <li className={`list-group-item`}>
                  <a href="student2.html">Students</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="add books.html">Add Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="check-out-books.html">Check-Out-Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="library rules.html">Rules</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="index.html">Dashboard</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="members.html">Members</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="student2.html">Students</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="add books.html">Add Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="check-out-books.html">Check-Out-Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="library rules.html">Rules</a>
                </li><li className={`list-group-item`}>
                  <a href="index.html">Dashboard</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="members.html">Members</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="student2.html">Students</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="add books.html">Add Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="check-out-books.html">Check-Out-Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="library rules.html">Rules</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="index.html">Dashboard</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="members.html">Members</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="student2.html">Students</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="add books.html">Add Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="check-out-books.html">Check-Out-Books</a>
                </li>
                <li className={`list-group-item`}>
                  <a href="library rules.html">Rules</a>
                </li>
                 */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
