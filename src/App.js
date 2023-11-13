import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Service from "./Components/services/Service";
import Blog from "./Components/blog/Blog";
import Footer from "./Components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Blog></Blog>
      <Service></Service>
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
