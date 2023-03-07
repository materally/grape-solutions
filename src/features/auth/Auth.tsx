import { ChangeEvent, useCallback, useState } from "react";
import { Form, Grid, Header } from "semantic-ui-react";
import { Button } from "../../ui/button";
import { ColorMap } from "../../ui/button/model";
import { Message } from "../../ui/message";

const MAX_LENGTH = 16;

const cardStyles = {
  maxWidth: 450,
  boxShadow: '0px 0px 90px #999',
  borderRadius: 15,
  padding: 30
};

export const Auth = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value),
    [setUsername],
  );

  const onSubmit = () => {
    setErrorMessage('');

    if (username.length > MAX_LENGTH || username.length === 0) {
      setErrorMessage(`The length of characters must be between 1 and ${MAX_LENGTH}!`)
      return;
    }
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={cardStyles}>

        {!!errorMessage && <Message message={errorMessage} negative={true} />}

        <Form>
          <Header as='h2' textAlign='left'>Login</Header>

          <Form.Input
            fluid
            placeholder='Username'
            onChange={onInputChange}
            value={username}
            type='text'
            maxLength={MAX_LENGTH}
          />

          <Button
            theme={ColorMap.BUTTON}
            style={{ float: 'right' }}
            onClick={onSubmit}
          >
            Login
          </Button>

        </Form>
      </Grid.Column>
    </Grid>
  );
}
