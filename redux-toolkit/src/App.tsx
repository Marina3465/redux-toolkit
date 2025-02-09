import { Container } from "@mui/material";
import TodoEditor from "./components/todoEditor";
import TodoList from "./components/todoList";

function App() {
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <TodoList />
        <TodoEditor />
      </div>
    </Container>
  );
}

export default App;
