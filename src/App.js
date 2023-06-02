import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Story from "./Pages/Story";
import Category from "./Pages/Category";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Header from "./Componants/Header";
import Footer from "./Componants/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/category" element={<Category />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
