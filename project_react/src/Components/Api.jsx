import React, { useState, useEffect } from "react";

const Api = () => {
  const [populate, setPopulate] = useState({ data: [] });

  const getData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopulate(data);
        console.log(data);
      })
      .catch((err) => console.error("error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row m-0">
      {populate.data.map((state, index) => (
        <div className="col-md-2 mt-3" key={index}>
          <div className="card m-2" >
            <div className="card-body">
              <p>City Name: {state.city}</p>
              <p>Country: {state.country}</p>
             
            </div>
            <button className="btn btn-outline-danger" >viw more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Api;
