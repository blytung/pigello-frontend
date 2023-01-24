import { PlanetDiv, InfoBox, PlanetHeadline, InfoTextHeadline } from "./styled";
import { PlanetImages } from "./../utils/constants.js";

const PlanetCard = ({ planets }) => {
  return (
    <div className='plannet-wrapper'>
      {planets.map((planet, index) => (
        <PlanetDiv key={index}>
          <img
            src={PlanetImages[planet.englishName]}
            alt={planet.englishName}
          />
          <PlanetHeadline>{planet.englishName}</PlanetHeadline>
          {planet?.moons ? (
            <p>
              {planet.moons.length} moons related to {planet.englishName}
            </p>
          ) : null}
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <InfoBox>
              <InfoTextHeadline>Radius</InfoTextHeadline>
              <p>{planet.equaRadius}</p>
            </InfoBox>
            <InfoBox>
              <p>Distance to sun</p>
              {planet.semimajorAxis}
            </InfoBox>
          </div>
        </PlanetDiv>
      ))}
    </div>
  );
};

export default PlanetCard;
