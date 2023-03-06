import { Container as SemanticContainer } from "semantic-ui-react";

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

export const Container = ({ children }: Props) => {
  return <SemanticContainer fluid>{children}</SemanticContainer>
}
