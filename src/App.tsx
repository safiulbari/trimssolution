import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Machinery from "./pages/Machinery";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/machinery" element={<Machinery />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/whychooseus" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
