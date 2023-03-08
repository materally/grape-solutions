import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Grid, Loader } from "semantic-ui-react";

import { Container } from "../../ui/layout";
import { useGetBeersQuery } from "./api";
import { Filter } from "./components/Filter";
import { ListItem } from "./components/ListItem";
import { RequestPayload } from "./model";
import { generateRequestUrl } from "./utils/generateRequestUrl";

const useFilters = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries(new URLSearchParams(searchParams.toString()))

  return params;
}

export const List = () => {
  const initialFilters = useFilters();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<RequestPayload>(initialFilters);
  const [request, setRequest] = useState<string>('');
  const { data, isLoading, isFetching } = useGetBeersQuery({
    url: request
  });

  useEffect(() => {
    const url = generateRequestUrl(filters);
    setRequest(url);
    navigate('?' + url)
  }, [filters, navigate])

  const handleOnFilter = (filters: RequestPayload) => setFilters(filters);

  return (
    <Container>
      <Filter onFilter={handleOnFilter} filters={filters} />
      {
        (isLoading || isFetching) ? <Loader active size="big" /> : (
          <Grid container padded={"vertically"}>
            <Card.Group centered itemsPerRow={3}>
              {data?.map(({ id, name, image_url, abv }) => <ListItem key={id} id={id} name={name} image_url={image_url} abv={abv} />)}
            </Card.Group>
          </Grid>
        )
      }
    </Container>
  );
}
