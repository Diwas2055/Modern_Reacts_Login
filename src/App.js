import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>

      <AccountBox />
<p>Inspiration: <em> https://www.youtube.com/watch?v=-bll7l-BKQI</em></p>
    </AppContainer>
  );
}

export default App;
