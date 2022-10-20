import React, { useState } from "react";
import classes from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Home from "./home";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import Games from "./games";
import News from "./news";
import GamesPage from "./gamePage";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const style = {
    width: "90%",
    textAlign: "center",
    height: "50px",
    color: "white",
    display: "inline-block",
    borderRadius: "8px",
    backgroundColor: match ? "grey" : "",
  };
  return (
    <div>
      <Link style={style} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

const Layout = () => {
  return (
    <div>
      <div className={classes.overall}>
        <div className={classes.topNav}>
          <div className={classes.appIcon}>GI</div>
          <div className={classes.appName}>GAMES INTEL</div>
          <div className={classes.searchBar}>
            <input
              type="text"
              className={classes.searchBar_input}
              placeholder="Search Games"
            />
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.sideNav}>
            <div className={classes.home}>
              <CustomLink to="/home">
                <FontAwesomeIcon icon={faHouse} className={classes.home_icon} />
              </CustomLink>
            </div>
            <div className={classes.news}>
              <CustomLink to="/news">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className={classes.news_icon}
                />
              </CustomLink>
            </div>

            <div className={classes.games}>
              <CustomLink to="/games">
                <FontAwesomeIcon
                  icon={faGamepad}
                  className={classes.game_icon}
                />
              </CustomLink>
            </div>
            <div className={classes.settings}>
              <FontAwesomeIcon icon={faGear} className={classes.gear_icon} />
            </div>
            <div className={classes.account}>
              <FontAwesomeIcon icon={faUser} className={classes.account_icon} />
            </div>
          </div>

          <div className={classes.body}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/games" element={<Games />} />
              <Route path="/games/gamePage" element={<GamesPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
