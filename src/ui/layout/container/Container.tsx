import { Container as SemanticContainer, ContainerProps } from "semantic-ui-react";

interface Props extends ContainerProps {
  children: JSX.Element | Array<JSX.Element>;
}

export const Container = ({ children }: Props) => {
  return <SemanticContainer fluid>{children}</SemanticContainer>
}
