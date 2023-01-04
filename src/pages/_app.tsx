import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { FullContainer, GlobalStyle } from "../styles/global";
import { darkTheme } from "../styles/themes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";
import { EventProvider } from "../contexts/EventContext";
import { Roboto } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <EventProvider>
            <GlobalStyle />
            <FullContainer className={roboto.className}>
              <Header />
              <Component {...pageProps} />
            </FullContainer>
          </EventProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
