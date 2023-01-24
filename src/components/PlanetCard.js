import {
  PlanetDiv,
  InfoBox,
  InfoText,
  PlanetHeadline,
  InfoTextHeadline,
} from "./styled";
import { PlanetImages } from "./../utils/constants.js";

const PlanetCard = ({ planet }) => {
  return (
    <div className='plannet-wrapper'>
      <PlanetDiv>
        <div className='image-wrapper'>
          <img
            src={PlanetImages[planet.englishName]}
            alt={planet.englishName}
          />
        </div>
        <PlanetHeadline>{planet.englishName}</PlanetHeadline>
        {planet?.moons ? (
          <p>
            {planet.moons.length} moons related to {planet.englishName}
          </p>
        ) : null}
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <InfoBox>
            <InfoTextHeadline>Radius</InfoTextHeadline>
            <InfoText>{planet.equaRadius}</InfoText>
            <br />
            <InfoTextHeadline>Distance to sun</InfoTextHeadline>
            <InfoText>{planet.semimajorAxis}</InfoText>
            <br />
            <InfoTextHeadline>Gravity</InfoTextHeadline>
            <InfoText>{planet.gravity}</InfoText>
          </InfoBox>
        </div>
      </PlanetDiv>
    </div>
  );
};

export default PlanetCard;
