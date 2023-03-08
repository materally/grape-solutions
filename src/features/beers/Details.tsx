import { useParams } from "react-router-dom";
import { Grid, Loader, Image } from "semantic-ui-react";
import styled from "styled-components";

import { NotFound } from "../../components/not-found/NotFound";
import { Container } from "../../ui/layout";
import { useGetDetailsQuery } from "./api";

export const Details = () => {
  const { beerId = "1" } = useParams();
  const { data, isLoading } = useGetDetailsQuery({
    id: beerId
  });
  const beer = data?.[0];

  if (isLoading) {
    return <Loader active size="big" />;
  }

  if (!beer) {
    return <Container fluid={false}><NotFound /></Container>
  }

  return (
    <Container fluid={false}>
      <Title>{beer.name}</Title>
      <Tagline>{beer.tagline}</Tagline>
      <Grid columns={"equal"}>
        <Grid.Column width={3}>
          <Image src={beer.image_url} size="small" centered />
        </Grid.Column>
        <Grid.Column >
          <h4>Description</h4>
          <p>{beer.description}</p>
          <h4><b>ABV:</b> {beer.abv}%</h4>
          <h4>Food pairings:</h4>
          <FoodPairings>
            {beer.food_pairing.map((food, idx) => <li key={idx}>{food}</li>)}
          </FoodPairings>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

const Title = styled.h1`
  padding-top: 20px;
`;

const Tagline = styled.h3`
  margin-top: 0px;
`;

const FoodPairings = styled.p`
  padding-left: 20px;
`;
