import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: min(100%, 360px);
  height: calc(100vh - 54px);
  padding: 16px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 54px;
  right: -360px;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: ease-in-out 0.2s;

  .close-button {
    svg {
      font-size: 1.6rem;
    }
  }

  h5 {
    font-weight: 400;
    font-size: 1.1rem;
  }

  p,
  span {
    font-size: 0.9rem;
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }

  span {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (min-width: 361px) {
    border-left: 1px solid ${(props) => props.theme.colors.details};
  }
`;

export const OpineModalOptions = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
