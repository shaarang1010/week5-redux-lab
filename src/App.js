import "./App.css";
import { Container } from "react-bootstrap";
import TopNavigation from "./components/navbar/TopNavigation";
import Homepage from "./containers/pages/homepage/Hompage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <TopNavigation appName="AFL scoreboard" creator="Shaarang" />
      </Container>
      <Container>
        <div style={{ marginTop: "10%" }}>
          <Homepage />
        </div>
      </Container>
    </Provider>
  );
}

export default App;
