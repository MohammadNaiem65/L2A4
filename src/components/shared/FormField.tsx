import type { ReactNode } from "react";
import React from "react";
import { Label } from "../ui/label";

interface FormFieldProps {
  children: ReactNode;
  className?: string;
  label?: string;
  htmlFor?: string;
  error?: {
    message: string;
  };
}

export default function FormField(props: FormFieldProps) {
  const { children, className, label, htmlFor, error } = props;

  const id = htmlFor || getChildrenId(children);

  return (
    <div className={className}>
      {label && (
        <Label htmlFor={id} className="mb-2 text-lg">
          {label}
        </Label>
      )}

      {children}

      {error && (
        <p className="text-destructive text-sm mt-2">{error.message}</p>
      )}
    </div>
  );
}

function getChildrenId(children: ReactNode) {
  const child = React.Children.only(children);

  if (child && child.props && "id" in child.props) {
    return child.props.id;
  }
}
