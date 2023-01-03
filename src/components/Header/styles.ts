import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  background-color: ${(props) => props.theme.colors.secondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.details}; ;
`;
