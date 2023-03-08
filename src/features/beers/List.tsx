import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Grid, Loader } from "semantic-ui-react";

import { Container } from "../../ui/layout";
import { useGetBeersQuery } from "./api";
import { Filter, ListItem, Pagination } from "./components";
import { PaginationType, RequestPayload } from "./model";
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

  const handleOnPagination = useCallback(
    (direction: PaginationType) => {
      const { page = 1 } = filters;
      const prevPage = (page) && Number(page) - 1;
      const nextPage = (page) && Number(page) + 1;
      const finalPage = direction === PaginationType.PREVIOUS ? prevPage : nextPage;

      return setFilters(prevFilters => ({ ...prevFilters, page: finalPage }))
    },
    [setFilters, filters],
  )

  return (
    <Container>
      <Filter onFilter={handleOnFilter} filters={filters} />
      {
        (isLoading || isFetching) ? <Loader active size="big" /> : (
          <Grid container padded={"vertically"}>
            <Card.Group centered>
              {data?.map(({ id, name, image_url, abv }) => (
                <ListItem
                  key={id}
                  id={id}
                  name={name}
                  image_url={image_url}
                  abv={abv}
                />
              ))}
            </Card.Group>
          </Grid>
        )
      }
      <Pagination
        onPrev={() => handleOnPagination(PaginationType.PREVIOUS)}
        onNext={() => handleOnPagination(PaginationType.NEXT)}
        page={filters.page || 1}
      />
    </Container>
  );
}
