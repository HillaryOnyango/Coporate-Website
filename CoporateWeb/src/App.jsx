import Engage from "./Components/Engage/Engage";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navabar/Navbar";
import Seo from "./Components/Seo/Seo";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Engage />
        <Seo />
        <Services />
      </div>
    </>
  );
}

export default App;
