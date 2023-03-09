import { Header, Icon, Segment } from 'semantic-ui-react';

export const ServerError = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name={'ban'} />
      500 - Internal Server Error
    </Header>
  </Segment>
);
