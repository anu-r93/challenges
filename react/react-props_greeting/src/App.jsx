import "./App.css";

export default function App() {
  return <Greeting name={"Anushka"} />;
}

const Greeting = ({ name }) => {
  return <h1>"Hello, {name}!"</h1>;
};
