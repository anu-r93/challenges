import "./App.css";

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

const Sum = ({ valueA, valueB }) => {
  const valueAB = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {valueAB}
    </h1>
  );
};
