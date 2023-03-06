import { Message as SemanticMessage } from 'semantic-ui-react';

interface Props {
  message: string;
}

export const Message = ({ message, ...props }: Props) => (
  <SemanticMessage {...props}>
    <p>{message}</p>
  </SemanticMessage>
);
