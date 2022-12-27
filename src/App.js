import { Container } from "reactstrap";
import { FixtureGenerator } from "./FixtureGenerator";
import Home from "./Home";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import 'animate.css';
function App() {
  return (
    <Container
    fluid="xl"
  >
    <Navbar/>
        <Home />
      </Container>
  );
}

export default App;