import styled from "styled-components";

export const PlanetHeadline = styled.div`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerMedium};
  font-weight: ${({ theme }) => theme.fontWeights.headerBold};
`;
export const InfoTextHeadline = styled.p`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.body};
`;
export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.headerBold};
`;
export const FilterButton = styled.button`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
  font-weight: ${({ theme }) => theme.fontWeights.headerBold};
  padding: 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.plum};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  transition: all 0.5s ease-out;
  display: inline-block;
  opacity: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.opacityWhite};
  padding: 15px 15px;
  margin: 10px;
  margin-top: 20px;
`;

export const ExampleSmallText = styled.div`
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
`;
export const PlanetDiv = styled.div`
  &:hover ${InfoBox} {
    transition: all 0.5s ease-out;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.opacityBlack};

    display: inline-block;
    opacity: 1;
    margin-top: 10px;
  }
  :hover {
    transform: translate(0%, -10px);
    transition: all 0.3s ease-out;

    border-left: 1px solid rgba(154, 100, 190, 0.2);
    border-right: 1px solid rgba(154, 100, 190, 0.2);

    background: linear-gradient(
      180deg,
      rgba(4, 4, 74, 0.2) 0%,
      rgba(47, 31, 57, 1) 100%
    );
    img {
      -webkit-filter: drop-shadow(5px 15px 15px rgba(83, 158, 219, 0.2));
      filter: drop-shadow(5px 15px 15px rgba(83, 158, 219, 0.2));
    }
  }

  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  transition: all 0.3s ease-out;
  img {
    transition: all 0.3s ease-out;
    -webkit-filter: drop-shadow(0px 0px 0px #000);
    filter: drop-shadow(0px 0px 0px #000);
  }

  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
`;


export const ExampleButton = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.blue};
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 12px;
`;
