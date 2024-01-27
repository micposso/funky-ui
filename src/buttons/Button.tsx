import React from "react";
import { StyledButton } from "./styles";


export const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren>(({children}, ref) => {
  return <StyledButton ref={ref}>{children}</StyledButton>;
});

Button.displayName = "Button";
