import React from "react";
import "./Planet.css";

const Resident = ({name, height, mass, gender}) => {
  return (
      <tr>
          <td>{name}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{gender}</td>
      </tr>
  );
};

export default Resident;
