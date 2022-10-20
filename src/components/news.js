import React from "react";
import { useEffect } from "react";
import classes from "./news.module.css";

const News = () => {
  return (
    <div className={classes.news}>
      <div className={classes.container}>
        <div className={classes.newsTop}>
          <div className={classes.left}>
            <div className={classes.left1}>
              <h1>news</h1>
            </div>
          </div>
          <div className={classes.right1}>
            <h2>right1</h2>
          </div>
          <div className={classes.right2}>
            <h2>right2</h2>
          </div>
          <div className={classes.right3}>
            <h2>right3</h2>
          </div>
        </div>
        <div className={classes.gameNews}>
          <div className={classes.codNews}></div>
          <div className={classes.apexNews}></div>
          <div className={classes.asphaltNews}></div>
          <div className={classes.arenaNews}></div>
          <div className={classes.ghenshinNews}></div>
          <div className={classes.freeFireNews}></div>
        </div>
      </div>
    </div>
  );
};

export default News;
