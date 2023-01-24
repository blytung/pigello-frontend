import { useState } from "react";
import { useEffect } from "react";
import PlanetCard from "../components/PlanetCard";

const Start = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchSpace = async () => {
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
      const planets = await response.json();
      const isPlanet = planets.bodies.filter((bodie) => bodie.isPlanet);

      setPlanets(isPlanet);
    };

    fetchSpace();
  }, []);
  return (
    <div className='solar-system'>
      <PlanetCard planets={planets} />
    </div>
  );
};

export default Start;
