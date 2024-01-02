import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
export default function Movie() {
  let userId = useParams();
  let x = userId.id;
  const [data, setData] = useState({});
  const [comment, setcomment] = useState("");
  const [rating, setrating] = useState(0);
  const getdata = async () => {
    const url = `https://www.omdbapi.com/?i=${x}&apikey=263d22d8`;

    const response = await fetch(url);
    const result = await response.json();

    if (result) {
      setData(result);
    }
  };

  useEffect(() => {
    getdata();
  });

  const [check, setcheck] = useState(false);

  const handleCheckboxChange = () => {
    setcheck(!check);

    if (!check) {
      const formatdata = {
        x: data.Poster,
        y: data.Title,
        z: data.Type,
        w: data.Year,
        comment: comment,
        rating: rating,
      };

      fetch("http://localhost:3030/favourite/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatdata),
      })
        .then((response) => {
          console.log(formatdata);
        })
        .catch((error) => {
          console.error("Error sending favorite:", error);
          // Handle error, maybe display a message to the user
        });
    }
  };

  return (
    <div className="container-fluid" id="movie-top">
      <div className="row gx-2 justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card pt-1 ps-1 pe-1 pb-0" style={{ height: "30rem" }}>
            <div>
              <img
                src={data.Poster}
                className="card-img-top "
                height="300px "
                alt="Movie Poster"
              />
            </div>
            <div className="card-body">
              <h6 className="card-title">{data.Title}</h6>
              <h6 className="card-text">Type:{data.Type}</h6>
              <h6 className="card-text ">Year: {data.Year}</h6>
              <div class="input-group mb-3 border">
                <div class="input-group-text bg-success ">
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                </div>
                <input
                  onChange={(e) => setcomment(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Set favourite & comment..."
                />
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter rating out of 10"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setrating(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
