import { createElement } from "react";
import { Loader as SemanticLoader, LoaderProps } from "semantic-ui-react";

type Props = LoaderProps;

export const Loader = (props: Props) => createElement(SemanticLoader, props);
