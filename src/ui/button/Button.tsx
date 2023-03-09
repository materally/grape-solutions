import { ButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

import { colorMap } from './colorMap';
import { ColorMap } from './model';

interface Props extends ButtonProps {
  theme: ColorMap;
}

export const Button = ({ theme, ...props }: Props) => {
  return <StyledButton theme={colorMap[theme]} {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  transition: all 0.2s;
  background: ${props => props.theme.background};
  border-radius: 5px;
  color: ${props => props.theme.color};
  padding: 10px 30px;
  border: 0;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.backgroundHover};
  }
`;
