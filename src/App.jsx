import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages//Home";
import About from "./pages//About";
import Works from "./pages/Works";
import Stories from "./pages/Stories";
import Events from "./pages/Events";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className=" mx-auto container space-y-42 px-2 md:px-4 overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Works />
      <Stories />
      <Events />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
