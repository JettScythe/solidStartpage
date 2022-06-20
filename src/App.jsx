import Clock from "./components/Clock";
import Search from "./components/Search";
import Card from "./components/Card";
import Header from "./components/Header";
import { Container, Divider, Flex } from "@hope-ui/solid";
import bg from "./assets/bg.jpeg";

function App() {
  return (
    <Divider
      css={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
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
