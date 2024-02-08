import Analytic from "../components/Analytic"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import NewLatter from "../components/NewLatter"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytic />
      <NewLatter />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
