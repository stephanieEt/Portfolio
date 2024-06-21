import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projets from "./components/pages/Projets";
import Apropos from "./components/pages/Apropos";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Projets" element={<Projets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
