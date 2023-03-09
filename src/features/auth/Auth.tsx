import { ChangeEvent, useCallback, useState } from "react";
import { Form, Grid, Header, Loader } from "semantic-ui-react";

import { Button } from "../../ui/button";
import { ColorMap } from "../../ui/button/model";
import { Message } from "../../ui/message";
import { useLazyGetAuthStateQuery } from './api';
import { AuthResponse } from "./model";
import { useSaveUser } from "./";

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
  const [login, { isFetching }] = useLazyGetAuthStateQuery();
  const saveUser = useSaveUser();

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value),
    [setUsername],
  );

  const onSubmit = async () => {
    setErrorMessage('');

    if (username.length > MAX_LENGTH || username.length === 0) {
      setErrorMessage(`The length of characters must be between 1 and ${MAX_LENGTH}!`)
      return;
    }

    try {
      const data = await login().unwrap();

      if (data === AuthResponse.NO) {
        setErrorMessage('Bad credentials!');
        return;
      }

      saveUser(username);

    } catch (error) {
      console.error(error);
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

          {isFetching ? <Loader active inline /> : (
            <Button
              theme={ColorMap.BUTTON}
              style={{ float: 'right' }}
              onClick={onSubmit}
            >
              Login
            </Button>
          )}

        </Form>
      </Grid.Column>
    </Grid>
  );
}
