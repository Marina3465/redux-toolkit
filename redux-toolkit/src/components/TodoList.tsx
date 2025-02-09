import { IconButton, List, ListItem, ListItemText, Paper } from "@mui/material";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeTodo } from "../store/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoListProps {}

const TodoList: FunctionComponent<TodoListProps> = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispath = useDispatch();

  if (todos.length === 0) return null;

  return (
    <Paper style={{ padding: 16 }}>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => dispath(removeTodo(todo.id))}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
