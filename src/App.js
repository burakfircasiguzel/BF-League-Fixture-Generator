import { Container } from "reactstrap";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import 'animate.css';
import Footer from "./components/Footer";
import ProductHunt from "./components/ProductHunt";
function App() {
  return (
    <Container fluid="xl">
      <ProductHunt/>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
