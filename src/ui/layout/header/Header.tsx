import { useCallback } from "react";
import { Menu } from "semantic-ui-react";

import { GrapeLogo } from "../../logo";
import { Title } from "./Title";
import { useIsAuthenticated, useLogout, useUser } from "../../../features/auth";
import { Button, ColorMap } from "../../button";

export const Header = () => {
  const logout = useLogout();
  const isAuthenticated = useIsAuthenticated();
  const username = useUser();

  const handleLogout = useCallback(() => logout(), [logout]);

  return (
    <Menu stackable inverted attached borderless>

      <Menu.Item>
        <GrapeLogo style={{ width: 'auto' }} />
      </Menu.Item>

      <Menu.Item>
        <Title />
      </Menu.Item>

      {isAuthenticated ? (
        <Menu.Menu position='right'>
          <Menu.Item style={{ color: 'white', fontSize: 16 }}>Hello, {username}!</Menu.Item>
          <Button
            theme={ColorMap.BRAND}
            onClick={handleLogout}
            style={{ margin: 10, borderRadius: 15, fontSize: 16, fontWeight: 'bold' }}
          >
            Logout
          </Button>
        </Menu.Menu>
      ) : null}


    </Menu>
  )
}
