import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {Container} from 'react-bootstrap'

import Spinner from "../../components/spinner/Spinner";
import CustomErrorMessage from "../../components/custom_error/CustomErrorMessage";

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

      <h1>This is HomePage</h1>
    </Container>
  );
};

export default HomePage;
