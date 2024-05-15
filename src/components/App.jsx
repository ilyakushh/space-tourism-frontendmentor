import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/App.module.scss";
import AppRoutes from "./AppRoutes";
import Header from "./Header";
import { background } from "../data/data";

const App = () => {
  const location = useLocation();
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/destination":
        return background[1];
      case "/crew":
        return background[2];
      case "/technology":
        return background[3];
      default:
        return background[0];
    }
  };

  return (
    <div
      className={styles.app}
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
