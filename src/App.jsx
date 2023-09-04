import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./components/header/nav";
import ItemListContainer from "./components/main/main";
import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import {ProductList, products} from "./components/main/Product/product";
import ProductDetail from './components/main/Product/productDetail';

export const Contexto = createContext(null);

function App() {
  return (
    <main>
      <BasicExample />
      <ItemListContainer greetings="¡Bienvenido a mi tienda online!" />
      <Router>
        <Routes>
          <Route exact path="/" element={<LayoutPrincipal />} />
          
          <Route exact path="/index" element ={<ProductList products={products}/>} />
          <Route exact path="/index/laptops" element={<ProductList filterType="Laptop" />} />
          <Route exact path="/index/phones" element={<ProductList filterType="Phone" />} />
          <Route exact path="/index/tvs" element={<ProductList filterType="TV" />} />
          <Route exact path="/products/:id" element={<ProductDetail products={products} />}/>
        </Routes>
      </Router>
    </main>
  );
}

function LayoutPrincipal() {
  return (
    <Outlet>
      
      <Route path="laptops" element={<ProductList filterType="Laptop" />} />
      <Route path="phones" element={<ProductList filterType="Phone" />} />
      <Route path="tvs" element={<ProductList filterType="TV" />} />
    </Outlet>
  );
}

export default App;
