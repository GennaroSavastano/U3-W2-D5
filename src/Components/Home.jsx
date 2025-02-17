import { Col, Container, Row, Spinner } from "react-bootstrap";

const Home = (props) => {
  if (!props.dailyForecast || (props.dailyForecast.length === 0 && !props.forecast) || props.forecast.length === 0) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="grow " />
      </Container>
    );
  }

  console.log("HOME PROPS", props);

  return (
    <Container className="w-75 containerForecast">
      <Row className="p-4">
        <Col className="d-flex flex-column align-items-center justify-content-center mt-5">
          <h1 className="">{props.forecast.city.name}</h1>
          <span className="d-block fs-4 ">
            {new Date(props.dailyForecast[0][0].dt_txt).toLocaleDateString("it-IT", {
              weekday: "short",
              day: "2-digit",
              month: "2-digit",
            })}
          </span>
          <span className="d-inline-block py-3 fs-2 fw-bold">{props.dailyForecast[0][0].weather[0].main}</span>
          <div className="bigIcons">{props.handleIcons(props.dailyForecast[0][0].weather[0].icon)}</div>
          <span className="d-block bigTemperature mt-3">{Math.floor(props.dailyForecast[0][0].main.temp)}°c</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
