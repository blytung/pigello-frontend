import styled from "styled-components";

export const PlanetHeadline = styled.div`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerMedium};
  font-weight: ${({ theme }) => theme.fontWeights.headerBold};
`;
export const InfoTextHeadline = styled.p`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
  display: inline-block;
  font-weight: bold;
`;

export const InfoBox = styled.div`
  color: ${({ theme }) => theme.colors.vanillaWhite};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.opacityWhite};
  padding: 7px 12px;
  margin: 10px;
`;

export const ExampleSmallText = styled.div`
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
`;
export const PlanetDiv = styled.div`
  :hover {
    background: linear-gradient(
      180deg,
      rgba(4, 4, 74, 0.2) 0%,
      rgba(47, 31, 57, 1) 100%
    );
  }
  padding: 50px;
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: calc(100vh - 100px);
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
