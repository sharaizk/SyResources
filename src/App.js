import React from "react";
import Router from "./routes/routes";
import { ThemeProvider } from "styled-components";
import Header from "./components/layout/header";
import Footer from "components/layout/footer";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadTop from "components/LoadTop";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
      <LoadTop />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
};

export default App;
