import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Logos from "./components/Logos/Logos";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <div>
        <div className="white-c"></div>
        <Header />
        <Hero />
      </div>
      <Logos />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}
