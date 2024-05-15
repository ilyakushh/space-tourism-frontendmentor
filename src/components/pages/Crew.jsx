import styles from "../../styles/Crew.module.scss";
import { crew } from "../../data/data.json";
import { useEffect, useState } from "react";

const Crew = () => {
  const [crewMemberIndex, setCrewMemberIndex] = useState(0);

  const crewMember = crew[crewMemberIndex];

  const handleSelectCrewMember = (index) => {
    setCrewMemberIndex(index);
  };

  useEffect(() => {
    const switchSlideInterval = () => {
      setCrewMemberIndex((prevIndex) =>
        prevIndex < crew.length - 1 ? prevIndex + 1 : 0
      );
    };
    let timerId = setInterval(() => switchSlideInterval(), 8000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.crew}>
      <div className={`container`}>
        <h4>
          <span>02</span>Meet your crew
        </h4>
        <div className={styles.crewWrapper}>
          <div className={styles.crewInfo}>
            <div className={styles.desc}>
              <span>{crewMember.role}</span>
              <h3>{crewMember.name}</h3>
              <p>{crewMember.bio}</p>
            </div>
          </div>
          <div className={styles.circles}>
            {Array(crew.length)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className={
                    index === crewMemberIndex
                      ? `${styles.circle} ${styles.active}`
                      : styles.circle
                  }
                  onClick={() => handleSelectCrewMember(index)}
                ></div>
              ))}
          </div>
          <div className={styles.image}>
            <img src={crewMember.images.png} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
