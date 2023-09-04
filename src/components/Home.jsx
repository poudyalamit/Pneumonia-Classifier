import Hero from "./Hero";
import Stats from "./Stats";
import Symptoms from "./Symptoms";
import Compare from "./compare";
import Check from "./check";
import Prevention from "./Prevention";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Symptoms />
      <Compare />
      <Prevention />
      <Check />
    </div>
  );
};

export default Home;
