import { Badge, Col, Container, Row } from "react-bootstrap";
import { Cloud, CloudSun, Droplet, Eye, Wind } from "react-bootstrap-icons";

const CityWeather = () => {
  return (
    <Container>
      <Row className="d-flex">
        {/* informazioni base */}
        <Col xs={1} sm={1} md={4} className="">
          <h1 className="fs-1 mt-5 mb-3">City Name</h1>
          <span className="d-block fs-4 mb-3">data</span>
          <Badge className="d-inline-block p-3 fs-3">Sunny</Badge>
          <span className="d-block bigTemperature">31°c</span>
        </Col>
        <Col className="d-flex">
          <CloudSun className="bigIcons" />
        </Col>
      </Row>
      {/* informazioni dettaglio giorno corrente */}
      <Row>
        <h3>Daily Summary</h3>
        <p>
          Now it seems <span>21°c</span>
        </p>
        <Col xs={4}>
          <div className="text-itemscenter">
            <Wind className="d-block" />
            <Badge className="d-inline-block">11 Km/h</Badge>
            <span className="d-block">Wind</span>
          </div>
        </Col>
        <Col xs={4}>
          <div>
            <Droplet className="d-block" />
            <Badge className="d-inline-block">62%</Badge>
            <span className="d-block">Umidity</span>
          </div>
        </Col>
        <Col xs={4}>
          <div>
            <Eye className="d-block" />
            <Badge className="d-inline-block">1 km</Badge>
            <span className="d-block">Visibility</span>
          </div>
        </Col>
      </Row>
      {/* informazioni forecast giorni successivi */}
      <Row>
        <h3>Next 5 days Forecast</h3>
        <Col xs={2}>
          <div>
            <span className="d-block">29°</span>
            <span className="d-block">
              <Cloud />
            </span>
            <span className="d-block">15/02</span>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <span className="d-block">29°</span>
            <span className="d-block">
              <Cloud />
            </span>
            <span className="d-block">16/02</span>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <span className="d-block">29°</span>
            <span className="d-block">
              <Cloud />
            </span>
            <span className="d-block">17/02</span>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <span className="d-block">29°</span>
            <span className="d-block">
              <Cloud />
            </span>
            <span className="d-block">18/02</span>
          </div>
        </Col>
        <Col xs={2}>
          <div>
            <span className="d-block">29°</span>
            <span className="d-block">
              <Cloud />
            </span>
            <span className="d-block">18/02</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CityWeather;
