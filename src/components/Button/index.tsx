import { ReactNode } from "react";
import { StyledButton } from "./styles";

type Props = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderless?: boolean;
  withoutSvgStyle?: boolean;
  className?: string;
  onClick: () => void;
};

export function Button({
  children,
  type,
  width,
  height,
  padding,
  margin,
  backgroundColor,
  borderless,
  withoutSvgStyle,
  className,
  onClick,
}: Props) {
  return (
    <StyledButton
      type={type ?? "button"}
      className={className}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      borderless={borderless}
      withoutSvgStyle={withoutSvgStyle}
      onClick={() => onClick()}
    >
      {children}
    </StyledButton>
  );
}
