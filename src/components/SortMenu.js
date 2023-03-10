import { sortByRadius, sortByDistance, sortByGravity } from "../utils/Sort";
import { PlanetImages } from "../utils/constants";
import { SortButton, Pluto } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { updatePlanetStore } from "../store/storeExample";
import { useState } from "react";
const SortMenu = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state["planets"].planets);
  const [active, setActive] = useState({});
  const sortRadius = async (e) => {
    setActive({ radius: true });
    const sortedPlanets = sortByRadius(planets);
    dispatch(updatePlanetStore(sortedPlanets));
  };
  const sortGravity = async () => {
    setActive({ gravity: active });
    const sortedPlanets = sortByGravity(planets);
    dispatch(updatePlanetStore(sortedPlanets));
  };
  const sortDistance = async () => {
    setActive({ distance: true });
    const sortedPlanets = sortByDistance(planets);
    dispatch(updatePlanetStore(sortedPlanets));
  };
  const whereIsPluto = async () => {
    alert(
      "Pluto is not a planet. I tought so, so I add it to localStorage and Store."
    );
    const fetchPluto = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/pluton",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const Pluto = await fetchPluto.json();
    if (fetchPluto.status === 200) {
      planets.push(Pluto);
      localStorage.setItem("data", JSON.stringify(planets));
      dispatch(updatePlanetStore(planets));
    }
  };
  return (
    <div className='sort-menu-wrapper'>
      <SortButton active={active.distance} onClick={(e) => sortDistance(e)}>
        Distance from Sun
      </SortButton>
      <SortButton active={active.radius} onClick={(e) => sortRadius(e)}>
        Radius
      </SortButton>
      <SortButton active={active.gravity} onClick={(e) => sortGravity(e)}>
        Gravity
      </SortButton>
      <Pluto onClick={whereIsPluto}>
        <img src={PlanetImages.Pluto} alt={"Where is pluto?"} />
      </Pluto>
    </div>
  );
};
export default SortMenu;
