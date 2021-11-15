import React, { useState} from "react";
import { useQuery } from "react-query";
import { Container, Col, Row } from "react-bootstrap";

import Spinner from "../../components/spinner/Spinner";
import CustomErrorMessage from "../../components/custom_error/CustomErrorMessage";
import CardItem from "../../components/card_item/CardItem";

import { getPeople } from "../../services/SWAPI";

const HomePage = () => {
  const [query, setQuery] = useState(null);

  const { data, error, isError, isLoading } = useQuery(["home", query], () =>
    getPeople()
  );

  return (
    <Container>
      {isError && <CustomErrorMessage error={error} />}
      {isLoading && <Spinner />}
      {data?.results && (
        <Row className="justify-content-center my-5">
          {data.results.map((creature, i) => (
            <Col lg={3} md={4} sm={6} key={i}>
              <CardItem name={creature.name} {...creature} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomePage;
