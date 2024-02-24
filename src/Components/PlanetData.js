import React, { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import "./Planet.css";
import { IoMdPlanet } from "react-icons/io";

const PlanetData = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [previousPageurl, setPreviousPageUrl] = useState("");

  useEffect(() => {
    fetchData("https://swapi.dev/api/planets/?format=json");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPageUrl(data.next);
      setPreviousPageUrl(data.previous);
    } catch (error) {
      console.log("Error Fatching Data", error);
    }
  };

  const handlePage = () => {
    if (nextPageUrl) {
      fetchData(nextPageUrl);
    }
  };

  const handlePreviousPage = () => {
    if (previousPageurl) {
      fetchData(previousPageurl);
    }
  };

  return (
    <div className="PlanetData-container">
      <div className="Planet-Lists">
        <div className="P-name-icon">
          <IoMdPlanet className="planet-icons-Io"/>
          <h1>Planet Directory</h1>
        </div>
        <div className="Planets-container">
          {planets.map((planet, index) => {
            return <PlanetCard key={index} planet={planet} />;
          })}
        </div>
        <div className="Planet-page-url">
          <div>
            {previousPageurl && (
              <button onClick={handlePreviousPage}>Previous Page</button>
            )}
          </div>
          <div>
            {nextPageUrl && <button onClick={handlePage}>Next Page</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetData;
