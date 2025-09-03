import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProp extends InputHTMLAttributes<HTMLInputElement> {
  textError?: string;
  inputBaseClass?: string;
  inputVariant?: "standartDark" | "smallDark" | "standartLight" | "smallLight";
  startContent?: ReactNode;
  endContent?: ReactNode;
}
