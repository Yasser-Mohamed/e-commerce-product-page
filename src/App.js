import React, { useState, createContext } from "react";
import { FaMagento } from "react-icons/fa";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { data } from "./data";

const CartContext = createContext()

function App() {
  

  return (
    <CartContext.Provider>
      <Header />
      <Content />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
