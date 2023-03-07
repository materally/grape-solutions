import { Menu } from "semantic-ui-react";

import { GrapeLogo } from "../../logo";
import { Title } from "./Title";

export const Header = () => {
  return (
    <Menu stackable inverted attached borderless>

      <Menu.Item>
        <GrapeLogo style={{ width: 'auto' }} />
      </Menu.Item>

      <Menu.Item>
        <Title />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>Logout</Menu.Item>
      </Menu.Menu>

    </Menu>
  )
}
