import { Navbar } from "./components";
import { About, Comments, Footer, Header, Product } from "./screens";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = () => {
  return (
    <ParallaxProvider>
      <Navbar />
      <Header />
      <About />
      <Product />
      <Comments />
      <Footer />
    </ParallaxProvider>
  );
};

export default Home;
