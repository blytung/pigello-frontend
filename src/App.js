import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider as SCTheme } from "styled-components";

import {
  constants as exampleConstants,
  increaseCount,
} from "./store/storeExample";
import theme from "./theme";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => state[exampleConstants.STORE_NAME].count
  );
  const lastUpdated = useSelector(
    (state) => state[exampleConstants.STORE_NAME].lastUpdated
  );

  const onIncrease = () => {
    dispatch(increaseCount());
  };

  return (
    <SCTheme theme={theme}>
      <div className="App">
        <ExampleText> Redux example count: {count}</ExampleText>
        <br />
        <ExampleSmallText>
          Last updated: {lastUpdated || "Never..."}
        </ExampleSmallText>
        <br />
        <ExampleButton style={{ marginTop: 12 }} onClick={onIncrease}>
          Click to increase
        </ExampleButton>
      </div>
    </SCTheme>
  );
}

const ExampleText = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.headerSmall};
`;

const ExampleSmallText = styled.div`
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSizes.headerXSmall};
`;

const ExampleButton = styled.button`
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

export default App;
