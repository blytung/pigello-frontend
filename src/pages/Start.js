import { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  constants as exampleConstants,
  increaseCount,
} from "../store/storeExample";
import FilterMenu from "../components/FilterMenu";
import PlanetCardsList from "../components/PlanetCardsList";

const Start = () => {
  const planets = useSelector((state) => state["planets"].planets);

  useEffect(() => {
    console.log("rerender", planets);
  }, [planets]);
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
      <FilterMenu />
    </div>
  );
};

export default Start;
