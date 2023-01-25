import PlanetCard from "../components/PlanetCard";
import { Headline } from "./styled";
const PlanetCardsList = ({ planets = [] }) => {
  if (planets.length <= 0) {
    return (
      <div>
        <Headline>Preparing for take off</Headline>
      </div>
    );
  } else {
    return (
      <div className='plannet-wrapper'>
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} index={index} />
        ))}
      </div>
    );
  }
};

export default PlanetCardsList;
