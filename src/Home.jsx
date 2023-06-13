import { Navbar } from "./components";
import { About, Comments, Footer, Header, Product } from "./screens";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      animate="active"
      initial="inactive"
      style={{ overflow: "hidden" }}
    >
      <ParallaxProvider>
        <Navbar />
        <Header />
        <About />
        <Product />
        <Comments />
        <Footer />
      </ParallaxProvider>
    </motion.div>
  );
};

export default Home;
