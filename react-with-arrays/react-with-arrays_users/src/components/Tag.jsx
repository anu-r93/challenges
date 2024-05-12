import "./Tag.css";

export default function Tag({ tag }) {
  <li className={`tag ${tag === "admin" ? "tag--highlight" : ""}`}>{tag}</li>;
}
