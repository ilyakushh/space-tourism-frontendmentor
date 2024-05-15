import React, { useState } from "react";
import styles from "../../styles/Destination.module.scss";
import { destinations } from "../../data/data.json";

const Destination = () => {
  const [selectedPlanetName, setSelectedPlanetName] = useState("Moon");

  const selectPlanet = (planetName) => {
    setSelectedPlanetName(planetName);
  };

  const selectedPlanet = destinations.find(
    (planet) => planet.name === selectedPlanetName
  );

  return (
    <div className={styles.destination}>
      <div className="container">
        <h4>
          <span>01</span>Pick your destination
        </h4>
        <div className={styles.planetsInfo}>
          <img src={selectedPlanet.images.png} alt="" />
          <div className={styles.desc}>
            <div className={styles.planets}>
              {destinations.map((planet) => (
                <p
                  onClick={() => selectPlanet(planet.name)}
                  key={planet.name}
                  className={
                    selectedPlanetName === planet.name ? styles.active : ""
                  }
                >
                  {planet.name}
                </p>
              ))}
            </div>
            {selectedPlanet && (
              <>
                <h2>{selectedPlanet.name}</h2>
                <p>{selectedPlanet.description}</p>
                <hr />
                <div className={styles.travelInfo}>
                  <div className={styles.distance}>
                    <span>Avg. distance</span>
                    <p>{selectedPlanet.distance}</p>
                  </div>
                  <div className={styles.distance}>
                    <span>Est. travel time</span>
                    <p>{selectedPlanet.travel}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
