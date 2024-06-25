import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projets from "./components/pages/Projets";
import Apropos from "./components/pages/Apropos";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Competences from "./components/pages/Competences";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
