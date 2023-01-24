import PlanetCard from "../components/PlanetCard";
const PlanetCardsList = ({ planets }) => {
  return (
    <div className='plannet-wrapper'>
      {planets.map((planet, index) => (
        <PlanetCard key={index} planet={planet} index={index} />
      ))}
    </div>
  );
};

export default PlanetCardsList;
