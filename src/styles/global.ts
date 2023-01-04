import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
	    padding: 0;
	    border: 0;
			box-sizing: border-box;
			font-size: 16px;
			line-height: 1;
    }

		#__next {
			height: 100vh;
			position: relative;
		}

		ol, ul {
			list-style-type: none;
		}

		a, button {
			-webkit-tap-highlight-color: none;
			outline: none;
			cursor: pointer;
		}

		input {
			outline: none;
		}

		a {
			text-decoration: none;
		}
`;

export const FullContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
