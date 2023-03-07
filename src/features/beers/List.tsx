import { Card, Grid, Loader } from "semantic-ui-react";

import { useGetBeersQuery } from "./api";
import { ListItem } from "./components/ListItem";

export const List = () => {
  const { data, isLoading } = useGetBeersQuery();

  if (isLoading) {
    return <Loader active size="big" />;
  }

  return (
    <Grid container padded={"vertically"}>
      <Card.Group centered itemsPerRow={3}>
        {data?.map(({ id, name, image_url, abv }) => <ListItem key={id} id={id} name={name} image_url={image_url} abv={abv} />)}
      </Card.Group>
    </Grid>
  );
}
