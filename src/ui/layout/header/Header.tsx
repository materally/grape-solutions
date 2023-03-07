import { useCallback } from "react";
import { Menu } from "semantic-ui-react";

import { GrapeLogo } from "../../logo";
import { Title } from "./Title";
import { useIsAuthenticated, useLogout } from "../../../features/auth";

export const Header = () => {
  const logout = useLogout();
  const isAuthenticated = useIsAuthenticated();

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
          <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
        </Menu.Menu>
      ) : null}


    </Menu>
  )
}
