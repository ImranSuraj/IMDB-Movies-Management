import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=263d22d8`;

    const response = await fetch(url);
    const result = await response.json();

    if (result.Search) {
      setData(result.Search);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  console.log(data);
  return (
    <div className="container-fluid " id="home-top">
      <div className="row gx-2">
        {data.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div
              className="card pt-1 ps-1 pe-1 pb-0"
              style={{ height: "24rem" }}
            >
              <div>
                <Link to={`/movie/${item.imdbID}`}>
                  <img
                    src={item.Poster}
                    className="card-img-top "
                    height="250px "
                    alt="Movie Poster"
                  />
                </Link>
              </div>
              <div className="card-body">
                <h6 className="card-title">{item.Title}</h6>
                <h6 className="card-text">Type:{item.Type}</h6>
                <h6 className="card-text ">Year: {item.Year}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
