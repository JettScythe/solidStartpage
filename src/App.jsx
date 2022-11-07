import Clock from "./components/Clock";
import Search from "./components/Search";
import Card from "./components/Card";
import Header from "./components/Header";
import { Container, Divider, Flex } from "@hope-ui/solid";
import "./css/App.css";
import bg from "./assets/bg.jpeg";
import Countdown from "./components/Countdown";

function App() {
  return (
    <Divider id="bg-div">
      <Flex direction="column">
        <Header />
        <Container>
          <Clock />
          <Search />
          <Card />
        </Container>
      </Flex>
    </Divider>
  );
}

export default App;
