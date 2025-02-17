import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Droplet, Eye, Wind } from "react-bootstrap-icons";

const CityWeather = (props) => {
  if (!props.dailyForecast || (props.dailyForecast.length === 0 && !props.forecast) || props.forecast.length === 0) {
    return (
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="grow " />
      </Container>
    );
  }
  //   const weatherCode = props.forecast.list[0].weather[0].icon;
  console.log("PROPS", props);

  return (
    <Container className="w-75 containerForecast">
      <Row className="p-4">
        {/* informazioni base */}

        <Col className="">
          <h1 className="mt-5">{props.forecast.city.name}</h1>
          <span className="d-block fs-4 py-3  ">
            {new Date(props.dailyForecast[0][0].dt_txt).toLocaleDateString("it-IT", {
              weekday: "short",
              day: "2-digit",
              month: "2-digit",
            })}
          </span>
          <span className="d-inline-block fs-3 fw-bold">{props.dailyForecast[0][0].weather[0].main}</span>
          <span className="d-block bigTemperature">{Math.floor(props.dailyForecast[0][0].main.temp)}°c</span>
        </Col>
        <Col className="">
          <div className="bigIcons">{props.handleIcons(props.dailyForecast[0][0].weather[0].icon)}</div>
        </Col>
      </Row>

      {/* informazioni dettaglio giorno corrente */}

      <Row className="p-4 d-flex justify-content-between">
        <div className="py-2">
          <h3>Daily Summary</h3>
          <p className="fs-5">
            Now it seems <span>{props.dailyForecast[0][0].main.feels_like}°c</span>
          </p>
        </div>
        <Col xs={4} className="d-flex flex-column align-items-center justify-content-center">
          <div className=" text-center">
            <div className="d-flex align-items-center justify-content-center">
              <Wind className="d-block smlIcons mb-2" />
            </div>
            <span className="d-inline-block fs-5 py-1 fw-bold">{props.dailyForecast[0][0].wind.speed} Km/h</span>
            <span className="d-block fs-5 py-1">Wind</span>
          </div>
        </Col>
        <Col xs={4} className="d-flex flex-column align-items-center justify-content-center">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center">
              <Droplet className="d-block smlIcons mb-2" />
            </div>
            <span className="d-inline-block fs-5 py-1 fw-bold">{props.dailyForecast[0][0].main.humidity}%</span>
            <span className="d-block fs-5 py-1">Umidity</span>
          </div>
        </Col>
        <Col xs={4} className="d-flex flex-column align-items-center justify-content-center">
          <div className=" text-center">
            <div className="d-flex align-items-center justify-content-center">
              <Eye className="d-block smlIcons mb-2" />
            </div>
            <span className="d-inline-block fs-5 py-1 fw-bold">{props.dailyForecast[0][0].visibility / 1000} km</span>
            <span className="d-block fs-5 py-1">Visibility</span>
          </div>
        </Col>
      </Row>

      {/* informazioni forecast giorni successivi */}
      <Row className="p-4 mb-5">
        <h3 className="py-2">Next 5 days Forecast</h3>
        {props.dailyForecast.slice(1, 5).map((day, index) => (
          <Col
            xs={6}
            sm={3}
            key={index}
            className=" py-2 mb-5 d-flex flex-column align-items-center justify-content-center"
          >
            <div className="minis text-center ">
              <span className="d-block fs-4 py-1 fw-bold">{Math.floor(day[0].main.temp)}°</span>
              <span className="d-block smlIcons py-1">{props.handleIcons(day[0].weather[0].icon)}</span>
              <span className="d-block fs-4 py-1 fw-bold">
                {new Date(day[0].dt_txt).toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" })}
              </span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CityWeather;
