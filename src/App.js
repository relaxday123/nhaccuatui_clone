import "./App.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainView from "./components/MainView";

function App() {
  return (
    <>
      <Container>
        <Row style={{display:"grid", gridTemplateColumns: "200px 1383px 319px"}}>
          <Col>
            <NavBar />
          </Col>
          <Col><MainView /></Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
