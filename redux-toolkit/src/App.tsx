import { Container, Typography } from "@mui/material";
import AddTodo from "./components/addTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        To do list
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
}

export default App;
