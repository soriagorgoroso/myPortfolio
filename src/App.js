import React, { useState } from "react";
import {
  Button,
  OverlayTrigger,
  Popover,
  Container,
  Row,
  Navbar,
  Col,
  Nav,
} from "react-bootstrap";
import { Canvas } from "react-three-fiber";
import BackDrop from "./components/BackDrop";
import FillLight from "./components/FillLight";
import GroundPlane from "./components/GroundPlane";
import KeyLight from "./components/KeyLight";
import RimLight from "./components/RimLight";
import Sphere from "./components/Sphere";

function App() {
  // Switch
  const [light, setLight] = useState(true);
  // Control Light
  function ToggleButtonExample() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");

    const radios = [
      { name: "Active", value: "1" },
      { name: "Radio", value: "2" },
      { name: "Radio", value: "3" },
    ];
  }
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand className="text-light">
            {["bottom"].map((placement) => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Header as="h3">My Media</Popover.Header>
                    <Popover.Body>
                      <Nav className="">
                        <Row>
                          <Col>
                            <Nav.Link
                              className=""
                              href="https://www.linkedin.com/soriagorgoroso"
                            >
                              {" "}
                              <i className="fa-brands fa-linkedin text-dark"></i>
                            </Nav.Link>
                            <Nav.Link
                              className=""
                              href="https://www.github.com/soriagorgoroso"
                            >
                              {" "}
                              <i className="fa-brands fa-github text-dark"></i>
                            </Nav.Link>
                            <Nav.Link
                              className=""
                              href="https://bit.ly/3vqfGTa"
                            >
                              {" "}
                              <i className="fa-regular fa-file text-dark "></i>{" "}
                            </Nav.Link>
                            <Nav.Link
                              className=""
                              disabled
                              href="https://bit.ly/3vqfGTa"
                            >
                              {" "}
                              <i className="fa-brands fa-whatsapp text-dark"></i>
                            </Nav.Link>
                          </Col>
                          <Col>
                            <Nav.Link active={false}>
                              <p className="text-dark m-0 text-pop-up-top celphone">
                                +59899807176
                              </p>{" "}
                            </Nav.Link>
                          </Col>
                        </Row>
                      </Nav>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button className="text-light" variant="black">
                  Sebastian Soria
                </Button>
              </OverlayTrigger>
            ))}
          </Navbar.Brand>

          <Row className="d-flex bd-highlight">
            <Col className="p-2 w-100 bd-highlight">
              {["bottom"].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Header as="h3">Working at this</Popover.Header>
                      <Popover.Body>
                        Working on my website. The idea is to make a 3D
                        environment using three.js with react and the
                        three-fiber ecosystem to show my portfolio
                      </Popover.Body>
                      <Popover.Body>
                        My next step is learn how can i put physics in this
                        object
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button className="popOver" variant="outline-secondary">
                    About
                  </Button>
                </OverlayTrigger>
              ))}
            </Col>
            <Col className="">
              {!light ? (
                <Button
                  className="buttonLight"
                  onClick={() => {
                    setLight(!light);
                  }}
                  variant="light"
                >
                  LIGHT UP
                </Button>
              ) : (
                <Button
                  className="buttonLight"
                  variant="dark"
                  onClick={() => {
                    setLight(!light);
                  }}
                >
                  LIGHT OF
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Canvas className="canvas">
        <GroundPlane />
        <BackDrop />
        {light && <KeyLight brightness={5.6} color={"#D765E6"} />}
        <FillLight brightness={2.6} color={"#bdefff"} />
        <RimLight brightness={54} color={"#fff"} />
        <Sphere />
      </Canvas>
    </>
  );
}

export default App;
