import styles from "../../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.desc}>
        <span>So, You want to travel to</span>
        <h1>Space</h1>
        <p>
          Let's face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relaxe because we'll give you a truly out of this world
          experience.
        </p>
      </div>

      <button>Explore</button>
    </div>
  );
};

export default Home;
