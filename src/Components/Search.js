import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Search.css";
export default function Search() {
  const navigate = useNavigate();
  let userId = useParams();
  let x = userId.title;
  const [data, setData] = useState([]);

  const getdata = async () => {
    const url = `https://www.omdbapi.com/?s=${x}&apikey=263d22d8`;

    const response = await fetch(url);
    const result = await response.json();
    

    if (result.Search) {
      setData(result.Search);
    } else {
      navigate("/Error");
    }
  };

  useEffect(() => {
    getdata();
  });

  return (
    <div className="container-fluid" id="search-top">
      <div className="row gx-2">
        {data.map((item, index) => {
          if (
            item.Poster !== "N/A" &&
            item.Title !== "N/A" &&
            item.Year !== "N/A"
          ) {
            return (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div
                  className="card pt-1 ps-1 pe-1 pb-0"
                  style={{ height: "24rem" }}
                >
                  {item.Poster && (
                    <Link to={`/movie/${item.imdbID}`}>
                      {" "}
                      <img
                        src={item.Poster}
                        className="card-img-top"
                        height="250px"
                        alt="Movie Poster"
                      />
                    </Link>
                  )}
                  <div className="card-body">
                    <h6 className="card-title">{item.Title}</h6>
                    <h6 className="card-text">Type: {item.Type}</h6>
                    <h6 className="card-text">Year: {item.Year}</h6>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
