import { Message as SemanticMessage, MessageProps } from 'semantic-ui-react';

interface Props extends MessageProps {
  message: string;
}

export const Message = ({ message, ...props }: Props) => (
  <SemanticMessage {...props}>
    <p>{message}</p>
  </SemanticMessage>
);
