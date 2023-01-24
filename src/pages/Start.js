import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ExampleButton,
  ExampleSmallText,
  ExampleText,
} from "../components/styled";
import {
  constants as exampleConstants,
  increaseCount,
} from "../store/storeExample";
const Start = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchSpace = async () => {
      const response = await fetch(
        "https://api.le-systeme-solaire.net/rest/bodies",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const planets = await response.json();
      console.log("response", planets);
      const isPlanet = planets.bodies.filter((bodie) => bodie.isPlanet);

      setPlanets(isPlanet);
      console.log("planets", isPlanet);
    };

    fetchSpace();
  }, []);
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => state[exampleConstants.STORE_NAME].count
  );
  const lastUpdated = useSelector(
    (state) => state[exampleConstants.STORE_NAME].lastUpdated
  );

  const onIncrease = () => {
    dispatch(increaseCount());
  };

  return (
    <div className='app-wrapper'>
      <ExampleText> Number of planets: {planets.length}</ExampleText>
      <br />
      <ExampleSmallText>
        Last updated: {lastUpdated || "Never..."}
      </ExampleSmallText>
      <br />
      <ExampleButton style={{ marginTop: 12 }} onClick={onIncrease}>
        Click to increase
      </ExampleButton>
    </div>
  );
};

export default Start;
