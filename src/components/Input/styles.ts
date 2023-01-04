import styled from "styled-components";

type Props = {
  float: boolean;
  width?: string;
  height?: string;
};

export const InputContainer = styled.div<Props>`
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "40px"};
  position: relative;
  display: flex;
  align-items: flex-end;

  label {
    position: absolute;
    top: ${(props) => (props.float ? "0" : "20px")};
    color: ${(props) =>
      props.float ? props.theme.colors.primary : props.theme.colors.details};
    transition: ease-in-out 0.2s;
    cursor: text;
  }

  input {
    width: 100%;
    height: 24px;
    color: ${(props) => props.theme.colors.text};
    background-color: transparent;
    border-bottom: 2px solid
      ${(props) =>
        props.float ? props.theme.colors.primary : props.theme.colors.details};
    font-size: 0.9rem;
    transition: ease-in-out 0.2s;
  }
`;
