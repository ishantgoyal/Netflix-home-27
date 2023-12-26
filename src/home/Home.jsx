import Navbar from "../components/navbar/Navbar";
import Features from "../components/features/Features";
import "./home.scss";
import { featuredMovies } from "../constant/listDetails";
import List from "../components/list/List";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features />
      {featuredMovies.map((row, id) => (
        <List featuredRow={row} key={id} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
