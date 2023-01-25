import {
  radiusFilter,
  distanceFromSunFilter,
  gravityFilter,
} from "../utils/Filter";
import { FilterButton } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { updatePlanetStore } from "../store/storeExample";
const FilterMenu = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state["planets"].planets);
  const planetsRadiusFilter = async () => {
    const filteredPlanets = radiusFilter(planets);
    dispatch(updatePlanetStore(filteredPlanets));
  };
  const planetsGravityFilter = async () => {
    const filteredPlanets = gravityFilter(planets);
    dispatch(updatePlanetStore(filteredPlanets));
  };
  const planetsDistanceFromSunFilter = async () => {
    const filteredPlanets = distanceFromSunFilter(planets);
    dispatch(updatePlanetStore(filteredPlanets));
  };
  return (
    <div className='filter-menu-wrapper'>
      <FilterButton onClick={() => planetsDistanceFromSunFilter(planets)}>
        Distance from Sun
      </FilterButton>
      <FilterButton onClick={() => planetsRadiusFilter()}>Radius</FilterButton>
      <FilterButton onClick={() => planetsGravityFilter()}>
        Gravity
      </FilterButton>
    </div>
  );
};
export default FilterMenu;
