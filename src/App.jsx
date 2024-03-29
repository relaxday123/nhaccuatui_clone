import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainView from "./components/MainView";
import NowPlaying from "./components/NowPlaying";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Container>
        <Row style={{ display: "grid", gridTemplateColumns: "13rem auto 20rem" }}>
          <Col>
            <NavBar />
          </Col>
          <Col
            style={{
              borderLeft: "0.5px solid rgba(181, 186, 191, .1)",
              borderRight: "0.5px solid rgba(181, 186, 191, .1)",
            }}
          >
            <MainView />
          </Col>
          <Col>
            <NowPlaying />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
