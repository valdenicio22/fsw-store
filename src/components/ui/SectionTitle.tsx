import { ComponentProps } from "react";

export const SectionTitle = ({ children, ...props }: ComponentProps<"p">) => {
  return (
    <p className="mb-5 pl-5 font-bold first-letter:uppercase "> {children}</p>
  );
};
