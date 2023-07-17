import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decreaseLikes, green, increaseLikes } from "./actions";

function App() {
  const colour = useSelector((state) => state.colour);
  const likes = useSelector((state) => state.image.likes);
  const dispatch = useDispatch();
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: colour,
      }}
    >
      <h1 style={{ margin: 0 }}>Hello</h1>
      <h1>Likes: {likes}</h1>
      <button onClick={() => dispatch(increaseLikes())}>+</button>
      <button onClick={() => dispatch(decreaseLikes())}>-</button>
      <button onClick={() => dispatch(green())}>Green it</button>
    </div>
  );
}

export default App;
