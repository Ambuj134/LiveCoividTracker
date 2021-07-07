import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const responce = await fetch("https://api.covid19india.org/data.json");

      const data = await responce.json();
      //   console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>Live</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <ul>
        <div className="row">
          <div className="col-sm-3">
            <div className="card text-white bg-primary">
              <div className="card-body">
                <h3 className="card-title">
                  <span>our</span>COUNTRY
                </h3>
                <p className="card-text">
                  <h1>INDIA</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-white bg-success">
              <div className="card-body">
                <h3 className="card-title">
                  <span>total</span>RECOVERED
                </h3>
                <p className="card-text">
                  <h1>{data.recovered}</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-white bg-secondary">
              <div className="card-body">
                <h3 className="card-title">
                  <span>total</span>CONFIREMED
                </h3>
                <p className="card-text">
                  <h1>{data.confirmed}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ul>

      <ul>
        <div className="row">
          <div className="col-sm-3">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h3 className="card-title">
                  <span>total</span>DEATH
                </h3>
                <p className="card-text">
                  <h1>{data.deaths}</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-white bg-info">
              <div className="card-body">
                <h3 className="card-title">
                  <span>total</span>ACTVE
                </h3>
                <p className="card-text">
                  <h1>{data.active}</h1>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card text-white bg-warning">
              <div className="card-body">
                <h2 className="card-title">
                  <span>last</span>UPDATE
                </h2>
                <p className="card-text">
                  <h1>{data.lastupdatedtime}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Covid;
