import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Project from "./Components/projects/Project";
import Footer from "./Components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./Components/skills/Skill";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact/>
      <Footer />

      {/* <BrowserRouter>
        <Routes>
          <Route path="" element />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
