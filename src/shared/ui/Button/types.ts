import { ReactNode } from "react";

export type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isDisabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  spinner?: ReactNode;
  spinnerPlacement?: "start" | "end";
  iconOnly?: boolean;
  fullWidth?: boolean;
};
