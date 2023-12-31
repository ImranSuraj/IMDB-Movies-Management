import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import icon from "./icon.webp";
export default function Header() {
  const [inputsearch, setsearch] = useState("");
  
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top " 
      style={{ backgroundColor: "purple" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand me-4">
          <img src={icon} alt="Logo" height={30} width={45}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link me-4 " aria-current="page">
              <span style={{color:"yellow"}}>Filmy</span><span style={{color:"red"}}>Duniya</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/favourite" className="nav-link me-4 " aria-current="page">
              <span style={{color:"yellow"}}>Favourite</span><span style={{color:"red"}}>Movies</span>
              </Link>
            </li>

          </ul>
          <form >      
              <input id="search-input"
                style={{ width: "250px" }}
                className="form-control me-2  "
                type="text"
                name="search-movie"
                placeholder="Search"
                aria-label="Search"
                value={inputsearch}
                onChange={(e) => setsearch(e.target.value)}
                required
              />
          </form>
          <Link
            to={`/search/${inputsearch}`}
            onClick={(e)=>setsearch('')}
            className="btn btn-success"
          >
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}
