import { useDispatch, useSelector } from "react-redux";

import { ThemeProvider as SCTheme } from "styled-components";

import theme from "./theme";
import { updatePlanetStore } from "./store/storeExample";
import { useEffect } from "react";
import Start from "./pages/Start";
import FilterMenu from "./components/FilterMenu";
function App() {
  const dispatch = useDispatch();

  const planets = useSelector((state) => state["planets"]);

  useEffect(() => {
    console.log("planets is updated", planets);
  }, [planets]);
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
      if (response.status === 200) {
        localStorage.setItem("data", JSON.stringify(isPlanet));
        dispatch(updatePlanetStore(isPlanet));
      }
    };
    if (localStorage.getItem("data")) {
      let dataFromLocalStorage = JSON.parse(localStorage.getItem("data"));
      dispatch(updatePlanetStore(dataFromLocalStorage));
    } else {
      fetchSolarSystem();
    }
  }, [dispatch]);

  return (
    <SCTheme theme={theme}>
      <div className='App'>
        <Start />
        <FilterMenu />
      </div>
    </SCTheme>
  );
}
export default App;
