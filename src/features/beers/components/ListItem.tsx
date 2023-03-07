import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import { ListItemProps } from "./model";

export const ListItem = ({ name, image_url, abv }: ListItemProps) => {
  return (
    <Card centered image>
      <ImageWrapper>
        <Image src={image_url} size="tiny" fluid centered style={{ height: 'fit-content' }} />
      </ImageWrapper>
      <Card.Content>
        <Card.Header textAlign="center">{name}</Card.Header>

        <Card.Description textAlign="center">
          <ABVWrapper>ABV: {abv}%</ABVWrapper>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const ImageWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
`;

const ABVWrapper = styled.b`
  color: black;
`;