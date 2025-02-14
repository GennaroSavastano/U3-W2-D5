import { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const SuperInput = () => {
  //   const [coordinates, setCoordinates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  //   const [forecast, setForecast] = useState();

  const fetchCityCoordinates = async () => {
    const token = "&appid=8d9afa5de0b17c00061ad7bf60dd1334";
    const URL = "http://api.openweathermap.org/geo/1.0/direct?q=";
    const city = searchQuery;
    const resp = await fetch(URL + city + token, {
      method: "GET",
    });

    if (resp.ok) {
      const coordinates = await resp.json();
      console.log(coordinates);

      //   setCoordinates(coordinates);
      //   cityForecastFetch();
    }
  };

  //   const cityForecastFetch = async () => {
  //     const token = "&appid=8d9afa5de0b17c00061ad7bf60dd1334";
  //     const metric = "&units=metric";
  //     const URL = "api.openweathermap.org/data/2.5/forecast?lat=40.8358846&lon=14.2487679";
  //     const longLat = coordinates;
  //     const resp = await fetch(URL + longLat + token + metric, {
  //       method: "GET",
  //     });
  //     if (resp.ok) {
  //       const newforecast = await resp.json();
  //       console.log(newforecast);

  //       setForecast(forecast);
  //       cityForecastFetch();
  //     }
  //   };

  useEffect(() => {
    fetchCityCoordinates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <Container>
      <Row className="d-flex justify-content-center my-5 ">
        <Col md={6}>
          {/* <Form.Control
            className="py-3"
            size="lg"
            type="text"
            value={searchQuery}
            placeholder="Search Here For Your Cityt Forecast..."
            onSubmit={(e) => setSearchQuery(e.target.value)}
          /> */}

          <InputGroup className="mb-3">
            <Form.Control
              className="py-3"
              size="lg"
              type="text"
              value={searchQuery}
              placeholder="Search Here For Your Cityt Forecast..."
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
              onClick={(e) => setSearchQuery(e.target.value)}
            >
              search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SuperInput;
