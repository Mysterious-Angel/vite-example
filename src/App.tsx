import "./App.css";
import Exercise1 from "./Exercise/Exercise-1";
import Exercise2 from "./Exercise/Exercise-2";
import Exercise3 from "./Exercise/Exercise-3";

const person = {
  name: "Antoni",
  age: 90,
  isAdmin: false,
};

function App() {
  return (
    <>
      <h1>Typescript training</h1>
      <Exercise1 />
      <Exercise2 />
      <Exercise3 name={person.name} />
    </>
  );
}

export default App;
