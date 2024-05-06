import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Hello</Button>
      <Button>What's Up!</Button>
      <Button>All Good?</Button>
      <Button>Have Fun</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
