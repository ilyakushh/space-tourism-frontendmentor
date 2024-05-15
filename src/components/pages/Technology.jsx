import styles from "../../styles/Technology.module.scss";
import { technology } from "../../data/data.json";
import { useState } from "react";

const Technology = () => {
  const [technologyIndex, setTechnologyIndex] = useState(0);

  const selectedTechnology = technology[technologyIndex];

  const handleSelectTechnology = (index) => {
    setTechnologyIndex(index);
  };

  return (
    <div className={styles.technology}>
      <div className="container">
        <h4>
          <span>03</span>Space launch 101
        </h4>
        <div className={styles.technologyWrapper}>
          <div className={styles.technologyInfo}>
            <div className={styles.pagination}>
              {Array(technology.length)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectTechnology(index)}
                    className={
                      technologyIndex === index
                        ? `${styles.page} ${styles.active}`
                        : styles.page
                    }
                  >
                    {index + 1}
                  </div>
                ))}
            </div>
            <div className={styles.desc}>
              <span>The terminology...</span>
              <h3>{selectedTechnology.name}</h3>
              <p>{selectedTechnology.description}</p>
            </div>
          </div>
          <img src={selectedTechnology.images.portrait} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
