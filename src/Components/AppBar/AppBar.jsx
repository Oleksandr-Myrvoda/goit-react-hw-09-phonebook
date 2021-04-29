import React from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import styles from "./AppBar.module.css";

import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";

const AppBar = () => {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
