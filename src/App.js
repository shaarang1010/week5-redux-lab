import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import TopNavigation from "./components/navbar/TopNavigation";
import Homepage from "./containers/homepage/Hompage";

function App() {
  return (
    <>
      <Container fluid>
        <TopNavigation appName="AFL scoreboard" creator="Shaarang" />
      </Container>
      <Container>
        <Homepage />
      </Container>
    </>
  );
}

export default App;
