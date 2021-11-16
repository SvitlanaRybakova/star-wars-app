import React, { useState } from "react";
import { useQuery } from "react-query";
import { Container, Col, Row } from "react-bootstrap";

import Spinner from "../../components/spinner/Spinner";
import CustomErrorMessage from "../../components/custom_error/CustomErrorMessage";
import CardItem from "../../components/card_item/CardItem";
import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/search_bar/SearchBar";
import { getPeople } from "../../services/SWAPI";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ["home", currentPage, searchText],
    () => getPeople(currentPage, searchText)
  );
  return (
    <Container className="text-center">
      {isError && <CustomErrorMessage error={error} />}
      <SearchBar
        setSearchText={setSearchText}
        setCurrentPage={setCurrentPage}
      />
      {isLoading && <Spinner />}
      {data?.results.length === 0 && <h1>No matches</h1>}
      {data?.results && (
        <Row className="my-5">
          {data.results.map((creature, i) => (
            <Col lg={3} md={4} sm={6} key={i}>
              <CardItem name={creature.name} {...creature} />
            </Col>
          ))}
        </Row>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isPreviousData={isPreviousData}
        hasMore={data?.next}
        count={data?.count}
      />
    </Container>
  );
};

export default HomePage;
