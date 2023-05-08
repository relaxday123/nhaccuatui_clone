import "./App.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainView from "./components/MainView";
import NowPlaying from "./components/NowPlaying";

function App() {
  return (
    <>
      <Container>
        <Row style={{display:"grid", gridTemplateColumns: "1fr 5fr 1.5fr"}}>
          <Col>
            <NavBar />
          </Col>
          <Col style={{ borderLeft: "0.5px solid rgba(181, 186, 191, .1)", borderRight: "0.5px solid rgba(181, 186, 191, .1)" }}><MainView /></Col>
          <Col><NowPlaying /></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
