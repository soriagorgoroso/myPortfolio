import React, { Suspense, useState } from "react";
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
import Camera from "./components/Camera";
import FillLight from "./components/FillLight";
import GroundPlane from "./components/GroundPlane";
import KeyLight from "./components/KeyLight";
import RimLight from "./components/RimLight";
import Sphere from "./components/Sphere";
import Sillon from "./components/Sillon.jsx";
// import Tv from "./components/Tv";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import urlVideo from "./Tour2.mp4";

const Tv = () => {
  const { nodes } = useGLTF("tv.gltf");

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = urlVideo;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <group position={[-3, 6, 2]} rotation={[0, 3.9, 0]}>
      <mesh geometry={nodes.TV.geometry} position={[-2, -3, 2]}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh rotation={[0, 0, 0]} position={[-2, -3, 3]}>
        <planeGeometry args={[3.2, 1.9]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

function App() {
  // Switch
  const [light, setLight] = useState(true);
  // Control Light

  return (
    <>
      <Navbar bg="dark" className="m-0 p-0">
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
                      <Row>
                        <Col>
                          <Nav.Link
                            className=""
                            href="https://www.linkedin.com/soriagorgoroso"
                          >
                            {" "}
                            <i className="fa-brands fa-linkedin text-dark"></i>
                          </Nav.Link>
                        </Col>
                        <Col>
                          <Nav.Link
                            className=""
                            href="https://www.github.com/soriagorgoroso"
                          >
                            {" "}
                            <i className="fa-brands fa-github text-dark"></i>
                          </Nav.Link>
                        </Col>
                        <Col>
                          <Nav.Link className="" href="https://bit.ly/3vqfGTa">
                            {" "}
                            <i className="fa-regular fa-file text-dark "></i>{" "}
                          </Nav.Link>
                        </Col>
                        <Col>
                          <Nav.Link
                            className=""
                            disabled
                            href="https://bit.ly/3vqfGTa"
                          >
                            {" "}
                            <i className="fa-brands fa-whatsapp text-dark"></i>
                          </Nav.Link>
                        </Col>
                      </Row>
                      <Row>
                        <Nav.Link active={false}>
                          <p className="text-dark m-0 text-pop-up-top celphone ">
                            +59899807176
                          </p>{" "}
                        </Nav.Link>
                      </Row>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button className="text-light p-0" variant="black">
                  Sebastian Soria
                  <h6 className="p-0 ">Click Me</h6>
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
                  <Button className="popOver m-0" variant="outline-secondary">
                    About
                  </Button>
                </OverlayTrigger>
              ))}
            </Col>
            <Col className="">
              {!light ? (
                <Button
                  className="buttonLight p-0 mt-2"
                  onClick={() => {
                    setLight(!light);
                  }}
                  variant="light"
                >
                  LIGHT UP
                </Button>
              ) : (
                <Button
                  className="buttonLight p-0 m-0"
                  variant="dark"
                  onClick={() => {
                    setLight(!light);
                  }}
                >
                  LIGHT OFF
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Canvas className="canvas">
        {/* <ambientLight /> */}
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enableDamping={false}
          enablePan={false}
        />
        <Camera />
        <GroundPlane />
        <BackDrop />
        {light && <KeyLight brightness={5.6} color={"#D765E6"} />}
        <FillLight brightness={2.2} color={"#bdefff"} />
        <RimLight brightness={54} color={"#fff"} />
        <Sphere />
        <Suspense fallback={null}>
          <Tv />
          <Sillon position={[4, 0, 2]} rotation={[0, -2.2, -0]} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
