import { ThemeProvider as SCTheme } from "styled-components";
import theme from "./theme";
import Start from "./pages/Start";
function App() {
  return (
    <SCTheme theme={theme}>
      <div className='App'>
        <Start />
      </div>
    </SCTheme>
  );
}
export default App;
