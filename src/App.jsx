import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Combo from "./components/Combo";
import EndSection from "./components/EndSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/SecondFooter";
import Supermarket from "./components/Supermarket";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Navbar />

        <Routes>
          {/*Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Supermarket />
                <Combo />
                <EndSection />
                <Section />
                <Footer />
              </>
            }
          />
            <Route path="/products" element={<Products/>} />

          {/*Login Page Route */}
          <Route
            path="/login"
            element={
              <>
                <Login/>
                <Section />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
