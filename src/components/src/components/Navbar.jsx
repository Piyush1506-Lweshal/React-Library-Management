import { useEffect, useState } from "react";
import Main from "../styles/navbar.module.css";
import Logo from "../assets/libary logo (1).png";
import axios from "axios";

const Navbar = () => {
  const [response, setRespose] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/categories?limit=1",
      );
      setRespose(data);
    }
    fetchApi();
  }, []);

  return (
    <>
      <div className={`navbar m-auto navbar-expand-lg bg-body-tertiary`}>
        <div className={`container-fluid ${Main.fix}`}>
          <div className={`${Logo}`}>
            <a className="navbar-brand" href="/Dashboard">
              <img src={Logo} alt="Libary" height="70" width="150" />
            </a>
          </div>
          <form className="ps-5 d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* Apperance of Application */}
          <i
            className={`bi bi-brilliance ps-5`}
            style={{ fontSize: "30px" }}
          ></i>
          {/* notification */}
          <i
            className={`${Main.bell} bi bi-bell pe-5 `}
            style={{ fontSize: "30px" }}
          ></i>
          {/* ----- */}
          <div className={`${Main.profile} `}>
            {/* Profile */}
            <i
              className={`bi bi-person-circle ${Main.circle}`}
              style={{
                fontSize: "55px",
                color: "#243f93",
                WebkitTextStroke: "3px #fff",
              }}
            ></i>
            {/* hover thing is here */}
            <div className={`${Main.api}`}>
              {response.map((item, index) => (
                <div id="list" className={`${Main.list}`} key={index}>
                  <div
                    id="image"
                    className={`${Main.profile_section} d-flex justify-content-center pt-4`}
                  >
                    <img src={item.image} alt="Products" height={50} />
                  </div>
                </div>
              ))}

              <span className={`${Main.Name}`}>Piyush</span>
              <ul className={`${Main.piyu} pt-3`}>
                <li>Setting</li>
                <li>Notification</li>
                <li>Help</li>
              </ul>
              <hr className="ms-4 me-4" />
              <span className={`${Main.log_out}`}>Sign out</span>
            </div>
          </div>
        </div>
      </div>
      {/* <script src="http://localhost:8097"></script> */}
    </>
  );
};
export default Navbar;
