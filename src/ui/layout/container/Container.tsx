import { Container as SemanticContainer, ContainerProps } from "semantic-ui-react";

interface Props extends ContainerProps {
  fluid?: boolean;
  children: JSX.Element | Array<JSX.Element>;
}

export const Container = ({ fluid = true, children }: Props) => {
  return <SemanticContainer fluid={fluid}>{children}</SemanticContainer>
}
