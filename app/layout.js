'use client'
import "./globals.css";
import { Provider } from "react-redux";
import store from './reduxToolkit/store'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, padding: 0, boxSizing: 'border-box'}}>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
          </Provider>
      </body>
    </html>
  );
}
export default RootLayout;
