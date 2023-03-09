import { Card, Grid } from "semantic-ui-react";
import { ListItemProps } from "../model";
import { ListItem } from "./ListItem";

interface Props {
  data?: Array<ListItemProps>
}

export const ListData = ({ data }: Props) => {
  return (
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
};
