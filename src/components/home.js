import React, { useState } from "react";
import classes from "./home.module.css";
import background from "../images/1890244.jpg";
import background1 from "../images/699908.jpg";
import background3 from "../images/5837927.jpg";
import background2 from "../images/wp4306613-mortal-kombat-11-scorpion-wallpapers.jpg";
import { useEffect } from "react";
import background4 from "../images/1316430.png";
import { findAllByDisplayValue } from "@testing-library/react";

const Home = (props) => {
  const HOME_DETAILS = [
    {
      image: background,
      text: "CALL OF DUTY MOBILE , a shooting game ",
      textHeading: "The best mobile game currently",
    },
    {
      image: background1,
      text: "View more details, view Leaderboards of your favourite game anytime anywhere",
      textHeading: "Discover More About The Games You Play",
    },
    {
      image: background2,
      text: "View more details, view Leaderboards of your favourite game anytime anywhere",
      textHeading: "Discover More About The Games You Play",
    },
    {
      image: background3,
      text: "View more details, view Leaderboards of your favourite game anytime anywhere",
      textHeading: "Discover More About The Games You Play",
    },
    {
      image: background4,
      text: "View more details, view Leaderboards of your favourite game anytime anywhere",
      textHeading: "Discover More About The Games You Play",
    },
  ];

  const [home, setHome] = useState(undefined);
  const [cod, setCod] = useState(undefined);
  const [homeState, setHomeState] = useState(undefined);
  const [codState, setCodState] = useState(false);
  const [index, setIndex] = useState(0);

  let prev = true;
  let codPrev = false;

  const normalHome = (
    <div>
      <div
        className={classes.about}
        style={{
          backgroundImage: `url("${background}")`,
        }}
      >
        <h1 className={classes.discover}>{HOME_DETAILS[0].textHeading}</h1>
        <p className={classes.view}>{HOME_DETAILS[0].text}</p>
      </div>
    </div>
  );

  const codHome = (
    <div>
      <div
        className={classes.about}
        style={{
          backgroundImage: `url("${background1}")`,
        }}
      >
        <h1 className={classes.discover}>{HOME_DETAILS[1].textHeading}</h1>
        <p className={classes.view}>{HOME_DETAILS[1].text}</p>
      </div>
    </div>
  );

  useEffect(() => {
    console.log(index);

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      if (index > 3) {
        setIndex(0);
      }
    }, 5000);
  }, [index]);

  return (
    <>
      {/* {homeState && home}
      {codState && cod} */}
      {/* {prev && homeState}
      {!prev && codState} */}

      <div>
        <div
          className={classes.about}
          style={{
            backgroundImage: `url("${HOME_DETAILS[index].image}")`,
          }}
        >
          <h1 className={classes.discover}>
            {HOME_DETAILS[index].textHeading}
          </h1>
          <p className={classes.view}>{HOME_DETAILS[index].text}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
