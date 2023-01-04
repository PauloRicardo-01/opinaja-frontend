import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

export const HomeEventsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
