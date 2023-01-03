import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;
