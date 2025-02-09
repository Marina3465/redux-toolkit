import { Button, Paper, TextField } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

interface AddTodoProps {}

const AddTodo: FunctionComponent<AddTodoProps> = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(addTodo({ title, description: "" }));
    setTitle("");
  };

  return (
    <Paper style={{ padding: 16, marginBottom: 16 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
