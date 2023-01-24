import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider as SCTheme } from "styled-components";

import theme from "./theme";
import {
  constants as exampleConstants,
  updatePlanetStore,
} from "./store/storeExample";
import { useEffect } from "react";
import Start from "./pages/Start";
function App() {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state["planets"].planets);
  console.log("planets", planets);
  useEffect(() => {
    const fetchSolarSystem = async () => {
      const response = await fetch(
        "https://api.le-systeme-solaire.net/rest/bodies/",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const solarSystem = await response.json();
      const isPlanet = solarSystem.bodies.filter((bodie) => bodie.isPlanet);
      dispatch(updatePlanetStore(isPlanet));
    };
    fetchSolarSystem();
  }, []);

  return (
    <SCTheme theme={theme}>
      <div className='App'>
        <Start />
      </div>
    </SCTheme>
  );
}
export default App;
