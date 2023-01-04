import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 70px;
    height: 70px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 8px solid rgba(11, 13, 18, 0.5);
    border-top-color: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    overflow: hidden;
    animation: ${rotateAnimation} 0.5s linear infinite;
  }
`;
