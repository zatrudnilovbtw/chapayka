import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import DoomZone from "./components/DoomZone/DoomZone";
import Contact from "./components/Contact/Contact";
import "./index.css";
function App() {
  return (
    <div className="app">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="portfolio">
        <Portfolio/>
      </section>
      <section id="doom">
        <DoomZone/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
