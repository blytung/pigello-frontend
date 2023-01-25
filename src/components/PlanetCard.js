import {
  PlanetDiv,
  InfoBox,
  InfoText,
  PlanetHeadline,
  InfoTextHeadline,
  ImageWrapper,
  FlexRow,
} from "./styled";
import { PlanetImages } from "./../utils/constants.js";

const PlanetCard = ({ planet }) => {
  return (
    <PlanetDiv>
      <ImageWrapper>
        <img src={PlanetImages[planet.englishName]} alt={planet.englishName} />
      </ImageWrapper>
      <PlanetHeadline>{planet.englishName}</PlanetHeadline>
      {planet?.moons ? (
        <p>
          {planet.moons.length} moons related to {planet.englishName}
        </p>
      ) : null}
      <FlexRow>
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
      </FlexRow>
    </PlanetDiv>
  );
};

export default PlanetCard;
