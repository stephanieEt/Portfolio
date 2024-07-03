import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projets from "./pages/Projets";
import Apropos from ".//pages/Apropos";
import Footer from "./components/Footer";
import Home from ".//pages/Home";
import Competences from ".//pages/Competences";
import Contact from "./pages/Contact";

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
