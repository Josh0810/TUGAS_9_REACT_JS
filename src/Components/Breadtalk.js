import { useState, useRef } from "react";

import {
  Breadcrumb,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Button,
  Overlay,
  OverlayTrigger,
  Popover,
  Spinner,
  Stack,
} from "react-bootstrap";

import {
  BLiga,
  DivPrimera,
  Liga1,
  LigaPrimer,
  SemuaTransfer,
  SerieA,
} from "./Content/index";
import "./Style.css";

function Breadtalk() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        <h6>Informasi Website</h6>
        <p>
          Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
          tentang berita olahraga
        </p>
      </Popover.Body>
    </Popover>
  );

  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb className="brd">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <br />

      <Stack direction="horizontal" gap={3}>
        <div className="bg-light">
          <h3>Rumor Transfer Pemain</h3>
        </div>
        <div className="bg-light ms-auto">
          <Spinner variant="success" animation="border" />
        </div>
        <div className="bg-light">
          <Spinner variant="success" animation="grow" />
        </div>
      </Stack>
      <br />

      <Row>
        <Tabs
          defaultActiveKey="semua-transfer"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="semua-transfer" title="Semua Transfer">
            <SemuaTransfer />
          </Tab>
          <Tab eventKey="liga-inggris" title="Liga Primer Inggris">
            <LigaPrimer />
          </Tab>
          <Tab eventKey="serie-a" title="Serie A">
            <SerieA />
          </Tab>
          <Tab eventKey="div-primera" title="Divisi Primera">
            <DivPrimera />
          </Tab>
          <Tab eventKey="b-liga" title="Bundes Liga">
            <BLiga />
          </Tab>
          <Tab eventKey="liga-indo" title="Liga 1 Indonesia">
            <Liga1 />
          </Tab>
        </Tabs>
      </Row>

      <Row>
        <Col>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="primary">Informasi</Button>
          </OverlayTrigger>

          <Button variant="primary" ref={target} onClick={() => setShow(!show)}>
            Versi Website
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
              <div
                {...props}
                style={{
                  padding: "2px 10px",
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                Akses Sport V1.0
              </div>
            )}
          </Overlay>
        </Col>
      </Row>
    </Container>
  );
}
export default Breadtalk;
