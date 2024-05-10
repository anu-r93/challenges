import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },

    {
      id: 1338,
      name: "🍑 Peach",
      color: "peach",
    },

    {
      id: 1339,
      name: "🍎 Apple",
      color: "red",
    },

    {
      id: 1340,
      name: "🥝 Kiwi",
      color: "green",
    },

    {
      id: 1341,
      name: "🍉 Watermelon",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
