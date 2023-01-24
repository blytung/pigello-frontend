import { radiusFilter, distanceFromSunFilter } from "../utils/filter";
import { FilterButton } from "./styled";
const FilterMenu = ({ planets }) => {
  return (
    <div className='filter-menu-wrapper'>
      <FilterButton href='#' onClick={() => distanceFromSunFilter(planets)}>
        Distance from Sun
      </FilterButton>
      <FilterButton href='#' onClick={() => radiusFilter(planets)}>
        Radius
      </FilterButton>
    </div>
  );
};
export default FilterMenu;
