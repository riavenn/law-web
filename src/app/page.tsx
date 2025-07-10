import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen pt-16"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Statistics />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
