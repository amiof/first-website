import React from "react";
import Header from "./Componentes/Header";
import "./index.css"
import Homepage from "./Componentes/homepage";
import Footer from "./Componentes/footer";
import {Route , Routes} from "react-router-dom"
import Products from "./Componentes/Products"
import AboutUs from "./Componentes/AboutUs";
import Programers from "./Componentes/programers";
import Ditails from "./Componentes/Ditails";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Ditails testprops="test" />} />
        <Route path="/"  element={<Homepage />} />
        <Route path="/aboutUs/*" element={<AboutUs />} >
          <Route path="programer" element={<Programers />}/>
          <Route path="productManager" element={<h1>me is productManager</h1>} />

        </Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
