import Brands from "./Components/Brands/Brands";
import Engage from "./Components/Engage/Engage";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Marketing from "./Components/Marketing/Marketing";
import Navbar from "./Components/Navabar/Navbar";
import Recent from "./Components/Recent/Recent";
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
        <Marketing />
        <Recent />
        <Footer />
      </div>
    </>
  );
}

export default App;
