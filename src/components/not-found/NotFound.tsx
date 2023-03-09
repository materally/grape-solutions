import { Header, Icon, Segment } from 'semantic-ui-react';

export const NotFound = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name={'frown'} />
      404 - Page not found
    </Header>
  </Segment>
);
