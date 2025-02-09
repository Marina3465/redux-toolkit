import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { updateTodo } from "../store/todoSlice";
import { Paper, Typography, TextField } from "@mui/material";

const TodoEditor: React.FC = () => {
  const selectedTodo = useSelector(
    (state: RootState) => state.todo.selectedTodo
  );
  const dispatch = useDispatch();
  const [description, setDescription] = useState(
    selectedTodo?.description || ""
  );

  useEffect(() => {
    if (selectedTodo) {
      setDescription(selectedTodo.description || "");
    }
  }, [selectedTodo]);

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    if (selectedTodo) {
      dispatch(
        updateTodo({ id: selectedTodo.id, description: event.target.value })
      );
    }
  };

  if (!selectedTodo) {
    return (
      <Paper style={{ flex: 1, padding: 16, textAlign: "center" }}>
        <Typography variant="h6">Select a task</Typography>
      </Paper>
    );
  }

  return (
    <Paper
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 16,
      }}
    >
      <Typography variant="h6">{selectedTodo.title}</Typography>
      <TextField
        label="Description"
        multiline
        fullWidth
        rows={10}
        value={description}
        onChange={handleUpdate}
        variant="outlined"
        margin="normal"
      />
    </Paper>
  );
};

export default TodoEditor;
