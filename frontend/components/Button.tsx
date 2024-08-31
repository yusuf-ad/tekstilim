import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-xl bg-dark-500 px-4 text-sm md:text-base py-3 md:px-8 md:py-4 text-white-500 shadow-md transition-opacity duration-200 hover:opacity-85 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
