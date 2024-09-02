import Brands from "./Components/Brands/Brands";
import Engage from "./Components/Engage/Engage";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navabar/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Seo from "./Components/Seo/Seo";
import Services from "./Components/Services/Services";
import Studies from "./Components/Studies/Studies";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Engage />
        <Seo />
        <Services />
        <Brands />
        <Studies />
        <Reviews />
      </div>
    </>
  );
}

export default App;
