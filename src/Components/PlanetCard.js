import React, { useState, useEffect } from "react";
import Resident from "./Resident";
import { MdPlace } from "react-icons/md";

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    try {
      const promises = planet.residents.map((residentUrl) =>
        fetch(residentUrl).then((res) => res.json())
      );
      const residentsData = await Promise.all(promises);
      setResidents(residentsData);
    } catch (error) {
      console.error("Error fetching residents:", error);
    }
  };

  return (
    <div className="planet-card">
      <div className="Md-place-name-icon">
         <MdPlace className="mdPlace"/>
        <h2>{planet.name}</h2>
      </div>
      <div className="planet-card-list">
        <div className="planet-data">
          <p className="pd-name">Climate</p>
          <p className="pd">{planet.climate}</p>
        </div>
        <div className="planet-data">
          <p className="pd-name">Population</p>
          <p className="pd">{planet.population}</p>
        </div>
        <div className="planet-data">
          <p className="pd-name">Terrain</p>
          <p className="pd">{planet.terrain}</p>
        </div>
        <div className="planet-data">
          <p className="pd-name">Rotation Period</p>
          <p className="pd">{planet.rotation_period}</p>
        </div>
        <div className="planet-data">
          <p className="pd-name">Orbital Period</p>
          <p className="pd">{planet.orbital_period} </p>
        </div>
        <div className="planet-data">
          <p className="pd-name">Surface Water</p>
          <p className="pd">{planet.surface_water} </p>
        </div>
      </div>
      <div>
        <h3>Residents</h3>
        <div className="planet-name">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident, index) => (
                <Resident
                  key={index}
                  name={resident.name}
                  height={resident.height}
                  mass={resident.mass}
                  gender={resident.gender}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
