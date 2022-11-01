import CardsList from "./components/CardsList";
import { robots } from "./components/robot";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <CardsList robots = { robots }/>
    </div>
  );
}

export default App;
