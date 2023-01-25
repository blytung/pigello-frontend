import {
  radiusFilter,
  distanceFromSunFilter,
  gravityFilter,
} from "../utils/Filter";
import { FilterButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { updatePlanetStore } from "../store/storeExample";
import { useState } from "react";
const FilterMenu = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state["planets"].planets);
  const [active, setActive] = useState({});
  const planetsRadiusFilter = async (e) => {
    setActive({ radius: true });
    const filteredPlanets = radiusFilter(planets);
    dispatch(updatePlanetStore(filteredPlanets));
  };
  const planetsGravityFilter = async () => {
    setActive({ gravity: active });
    const filteredPlanets = gravityFilter(planets);
    dispatch(updatePlanetStore(filteredPlanets));
  };
  const planetsDistanceFromSunFilter = async () => {
    setActive({ distance: true });
    const filteredPlanets = distanceFromSunFilter(planets);
    dispatch(updatePlanetStore(filteredPlanets));
  };
  return (
    <div className='filter-menu-wrapper'>
      <FilterButton
        active={active.distance}
        onClick={(e) => planetsDistanceFromSunFilter(e)}
      >
        Distance from Sun
      </FilterButton>
      <FilterButton
        active={active.radius}
        onClick={(e) => planetsRadiusFilter(e)}
      >
        Radius
      </FilterButton>
      <FilterButton
        active={active.gravity}
        onClick={(e) => planetsGravityFilter(e)}
      >
        Gravity
      </FilterButton>
    </div>
  );
};
export default FilterMenu;
