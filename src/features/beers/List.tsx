import { Card, Grid, Loader } from "semantic-ui-react";
import { Container } from "../../ui/layout";

import { useGetBeersQuery } from "./api";
import { Filter } from "./components/Filter";
import { ListItem } from "./components/ListItem";

export const List = () => {
  const { data, isLoading } = useGetBeersQuery();

  if (isLoading) {
    return <Loader active size="big" />;
  }

  return (
    <Container>
      <Filter />
      <Grid container padded={"vertically"}>
        <Card.Group centered itemsPerRow={3}>
          {data?.map(({ id, name, image_url, abv }) => <ListItem key={id} id={id} name={name} image_url={image_url} abv={abv} />)}
        </Card.Group>
      </Grid>
    </Container>
  );
}
