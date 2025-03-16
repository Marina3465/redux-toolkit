import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeTodo, selectTodo } from "../store/todoSlice";
import AddTodo from "./addTodo";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoListProps {}

const TodoList: FunctionComponent<TodoListProps> = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispath = useDispatch();

  return (
    <Paper
      style={{ width: "30%", padding: 16, height: "100vh", overflowY: "auto" }}
    >
      <AddTodo />
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            onClick={() => dispath(selectTodo(todo.id))}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => dispath(removeTodo(todo.id))}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
