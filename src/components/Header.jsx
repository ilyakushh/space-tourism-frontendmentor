import { navigation } from "../data/data";
import styles from "../styles/Header.module.scss";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setIsOpen(false);
  };

  const location = useLocation().pathname;
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <hr></hr>
      <IoMenuOutline className={styles.navBar} onClick={toggleNavBar} />
      {isOpen ? (
        <RxCross2 onClick={toggleNavBar} className={styles.cross} />
      ) : (
        ""
      )}

      <div className={isOpen ? styles.navigationPanel : styles.navigation}>
        {navigation.map((item) => {
          const path = `/${
            item.name === "Home" ? "" : item.name.toLowerCase()
          }`;
          return (
            <Link
              key={item.id}
              to={path}
              onClick={closeNavBar}
              className={`${styles.navigationItem} ${
                location === path ? styles.active : ""
              }`}
            >
              <span>{item.id}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
