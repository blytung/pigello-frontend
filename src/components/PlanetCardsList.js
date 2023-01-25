import { useEffect, useState } from "react";
import PlanetCard from "../components/PlanetCard";
const PlanetCardsList = ({ planets = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (planets.length) {
      setIsLoading(false);
    }
  }, [planets]);
  if (isLoading) {
    return (
      <div>
        <h1>Preparing for take off</h1>
      </div>
    );
  } else {
    return (
      <div className='plannet-wrapper'>
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
    );
  }
};

export default PlanetCardsList;
