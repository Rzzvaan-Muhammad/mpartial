import React from "react";
import Header from "./header";
import Footer from "./footer";

export default ({ children }) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
