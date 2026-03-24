"use client";

import { forwardRef, HTMLProps, useId, useState } from "react";
import { Label } from "../label";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type || "text"}
        className={`h-12 w-full rounded-xl border border-gray-300 px-5 py-2.5 text-left text-sm text-gray-800 shadow-theme-xs
          placeholder:text-sm placeholder:text-gray-400 disabled:opacity-70
          focus:border-primary-300 focus:outline-0 focus:ring-3 focus:ring-primary-300/20
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : ""
          }
        `}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

type InputGroupProps = Omit<HTMLProps<HTMLInputElement>, "id"> & {
  label: string;
  groupClassName?: string;
  error?: string;
};

export function InputGroup({
  label,
  groupClassName,
  error,
  ...props
}: InputGroupProps) {
  const id = useId();

  return (
    <div className={groupClassName}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
      {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
    </div>
  );
}
