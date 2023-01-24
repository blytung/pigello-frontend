import { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import FilterMenu from "../components/FilterMenu";
import PlanetCardsList from "../components/PlanetCardsList";

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
  const ref = useRef();

  // The scroll listener
  const handleScroll = useCallback((event) => {
    event.preventDefault();
    ref.current.scrollLeft += event.deltaY;
  }, []);

  useEffect(() => {
    ref.current.addEventListener("wheel", handleScroll);
  }, [handleScroll]);
  return (
    <div className='solar-system' id='scrollable' ref={ref}>
      <PlanetCardsList planets={planets} />
      <FilterMenu planets={planets} />
    </div>
  );
};

export default Start;
