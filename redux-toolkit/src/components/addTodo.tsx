import { Button, Paper, TextField } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

interface AddTodoProps {}

const AddTodo: FunctionComponent<AddTodoProps> = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    } else {
      throw new Error("Нельзя добавить пустую задачу!");
    }
  };

  return (
    <Paper style={{ padding: 16, marginBottom: 16 }}>
      <TextField
        label="New task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        style={{ marginTop: 8 }}
      >
        Add
      </Button>
    </Paper>
  );
};

export default AddTodo;
