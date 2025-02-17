import { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const SuperInput = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [capital, setCapital] = useState("");
  const navigate = useNavigate();

  const capitals = [
    "Roma",
    "Washington, D.C.",
    "Pechino",
    "Londra",
    "Parigi",
    "Berlino",
    "Mosca",
    "Brasilia",
    "Ottawa",
    "New Delhi",
    "Città del Messico",
    "Buenos Aires",
    "Canberra",
    "Abu Dhabi",
    "Seul",
    "Cairo",
    "Riyad",
    "Città del Cabo",
    "Bangkok",
    "Jakarta",
    "Atene",
    "Madrid",
    "Città del Vaticano",
    "Lagos",
    "Kiev",
  ];

  const fetchCityCoordinates = async () => {
    try {
      const token = "&appid=8d9afa5de0b17c00061ad7bf60dd1334";
      const URL = "http://api.openweathermap.org/geo/1.0/direct?q=";
      const resp = await fetch(URL + (city || capital) + token, {
        method: "GET",
      });

      if (resp.ok) {
        const coordinates = await resp.json();
        console.log(coordinates);
        console.log(coordinates[0].lat);
        console.log(coordinates[0].lon);

        setCoordinates(coordinates);
      } else {
        throw new Error("Impossibile accedere alle coordinate del luogo inserito !");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const cityForecastFetch = async () => {
    try {
      const token = "&appid=8d9afa5de0b17c00061ad7bf60dd1334";
      const metric = "&units=metric";
      const URL = "http://api.openweathermap.org/data/2.5/forecast?";
      const latAndLon = `lat=${coordinates[0].lat}&lon=${coordinates[0].lon}`;
      const resp = await fetch(URL + latAndLon + token + metric, {
        method: "GET",
      });
      if (resp.ok) {
        const forecast = await resp.json();
        props.setForecast(forecast);
        console.log(forecast);

        const days = {};
        forecast.list.forEach((forecastDate) => {
          const date = forecastDate.dt_txt.split(" ")[0];

          if (!days[date]) {
            days[date] = [];
          }
          days[date].push(forecastDate);
        });

        const dailyForecast = [];
        for (let date in days) {
          dailyForecast.push(days[date]);
        }

        console.log("DAILY", dailyForecast);
        props.setDailyForecast(dailyForecast);
      } else {
        throw new Error("Impossibile accedere al Meteo desiderato !");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(
    function () {
      setInterval(() => {
        const randomCapital = capitals[Math.floor(Math.random() * capitals.length)];
        setCapital(randomCapital);
      }, 50000);

      capital && fetchCityCoordinates();
    },
    [capital]
  );

  useEffect(() => {
    city && fetchCityCoordinates();
    // coordinatesHasFetched && cityForecastFetch();
    // console.log(forecast);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  useEffect(() => {
    if (coordinates.length > 0) {
      cityForecastFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  return (
    <Container className="w-75">
      <Row className="d-flex justify-content-center my-5 ">
        <Col md={6}>
          <InputGroup className="mb-3 ">
            <Form.Control
              className="py-3 body"
              size="lg"
              type="text"
              value={searchQuery}
              placeholder="Search Your City Forecast..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="button"
              variant="outline-secondary"
              className="body "
              id="button-addon2"
              onClick={() => {
                setCity(searchQuery), navigate("/your-forecast");
              }}
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
