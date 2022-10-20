import React from "react";
import classes from "./games.module.css";
import { Link } from "react-router-dom";
import { useResolvedPath } from "react-router-dom";
import { useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const style = {
    width: "100%",
    textAlign: "center",
    height: "100%",
    color: "black",
    display: "inline-block",
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

const Games = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.cod}>
          <CustomLink
            style={{
              height: "100%",
              display: "block",
            }}
            to="/games/gamePage"
          >
            <h1 className={classes.h1}>COD</h1>
          </CustomLink>
        </div>
        <div className={classes.apex}>apex</div>
        <div className={classes.sfa}>sfa</div>
        <div className={classes.asphalt}>asphalt</div>
        <div className={classes.free}>free</div>
        <div className={classes.genshin}>genshin</div>
      </div>
    </div>
  );
};

export default Games;
