import React, { useState, useEffect } from "react";
import "./Favourite.css";
export default function Favourite() {
  const [data, setData] = useState([]);
  const getdata = () => {
    fetch("http://localhost:3030/favourite")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container-fluid " id="favourite-top">
      <div className="row gx-2">
        {data.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div
              className="card pt-1 ps-1 pe-1 pb-0"
              style={{ height: "30rem" }}
            >
              <div>
                <img
                  src={item.x}
                  className="card-img-top "
                  height="250px "
                  alt="Movie Poster"
                />
              </div>
              <div className="card-body">
                <h6 className="card-title">{item.y}</h6>
                <h6 className="card-text">Type:{item.z}</h6>
                <h6 className="card-text ">Year: {item.w}</h6>
                <h6 className="card-text">Comment:{item.comment}</h6>
                <h6 className="card-text ">Rating: {item.rating}</h6>
                <button
                  onClick={() => Delete(item.id)}
                  type="button"
                  class="btn btn-danger p-1"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  function Delete(index) {
    fetch(`http://localhost:3030/favourite/${index}`, {
      method: "DELETE",
    });

    window.location.reload();
  }
}
