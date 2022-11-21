import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import JobPage from "./Pages/JobPage/JobPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} /> */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
