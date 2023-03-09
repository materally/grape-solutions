import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const FilterInput = (props: Props) => {
  return (
    <div className="ui input">
      <input {...props} />
    </div>
  );
};
