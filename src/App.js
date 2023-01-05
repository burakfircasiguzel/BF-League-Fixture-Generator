import { Container } from "reactstrap";
import { FixtureGenerator } from "./FixtureGenerator";
import Home from "./Home";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import 'animate.css';
import Footer from "./Footer";
import ProductHunt from "./ProductHunt";
function App() {
  return (
    <Container
      fluid="xl"
    >
      <ProductHunt/>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
