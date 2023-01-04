import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderless?: boolean;
  withoutSvgStyle?: boolean;
};

export const StyledButton = styled.button<Props>`
  width: ${(props) => props.width ?? "max-content"};
  height: ${(props) => props.height ?? "max-content"};
  padding: ${(props) => props.padding ?? "6px"};
  margin: ${(props) => props.margin ?? "0"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${(props) => props.color ?? props.theme.colors.text};
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  border: ${(props) =>
    props.borderless ? "" : `1px solid  ${props.theme.colors.primary}`};
  border-radius: 4px;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: 0.2s;

  svg {
    margin-bottom: ${(props) => (props.withoutSvgStyle ? "" : "2px")};
    font-size: ${(props) => (props.withoutSvgStyle ? "" : "0.9rem")};
  }

  @media screen and (min-width: 720px) {
    :hover {
      box-shadow: 0 0 2px 2px ${(props) => props.theme.colors.primary};
    }
  }
`;
