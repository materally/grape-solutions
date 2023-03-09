import { Header, Icon, Segment } from "semantic-ui-react";

import { Container } from "../../../ui/layout";

export const NoData = () => (
  <Container fluid={false}>
    <Segment placeholder>
      <Header icon>
        <Icon name='exclamation triangle' />
        No more results.
      </Header>
    </Segment>
  </Container>
);
