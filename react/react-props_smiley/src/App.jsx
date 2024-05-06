import "./App.css";

export default function App() {
  return <Smiley isHappy={false} />;
}

const Smiley = ({ isHappy }) => {
  return <h1>{isHappy ? <span>🙂</span> : <span>🙃</span>}</h1>;
};
