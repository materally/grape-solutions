import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import { ListItemProps } from "./model";
import { useNavigate } from "react-router-dom";

export const ListItem = ({ id, name, image_url, abv }: ListItemProps) => {
  const navigate = useNavigate();

  const handleLink = (id: number) => {
    const link = `/beer/${id}`;

    return navigate(link);
  }

  return (
    <Card link centered onClick={() => handleLink(id)}>
      <ImageWrapper>
        <Image src={image_url} size="tiny" centered />
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