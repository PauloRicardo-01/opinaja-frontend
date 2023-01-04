import styled from "styled-components";

export const CardContainer = styled.div`
  width: min(100%, 320px);
  height: max-content;
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;

  .category-icon {
    width: 76px;
    height: 76px;
    position: absolute;
    right: 6px;
    bottom: 6px;
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.6;

    &.reality {
      right: 10px;
      bottom: 4px;
    }
  }

  .reality-text {
    position: absolute;
    right: 21px;
    bottom: 34px;
    color: ${(props) => props.theme.colors.primary};
    white-space: pre-line;
    text-align: center;
    opacity: 0.6;

    &.BBB {
      right: 34px;
      bottom: 40px;
    }
  }

  h5 {
    font-size: 0.9rem;
  }

  span {
    color: ${(props) => props.theme.colors.details};
    font-size: 0.9rem;
  }

  div {
    margin: 6px 0;

    p {
      margin: 3px 0;
      color: ${(props) => props.theme.colors.primary};
      font-size: 0.9rem;

      span {
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
