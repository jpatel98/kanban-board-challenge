import "./App.scss";
import Kanban from "./components/Kanban/Kanban";


function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Your tasks</h1>
      <Kanban/>
    </div>
  );
}

export default App;
