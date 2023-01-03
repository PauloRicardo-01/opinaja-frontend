import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
    }

		a, button {
			cursor: pointer;
		}
`;

export const FullContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
