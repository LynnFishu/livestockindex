import React, { useState } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [newTaskDeadline, setNewTaskDeadline] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        name: newTask,
        date: newTaskDate,
        deadline: newTaskDeadline
      };
      setTasks([...tasks, task]);
      setNewTask('');
      setNewTaskDate('');
      setNewTaskDeadline('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <TextField
        label="Enter Task"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Task Date"
        type="date"
        variant="outlined"
        fullWidth
        value={newTaskDate}
        onChange={(e) => setNewTaskDate(e.target.value)}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Task Deadline"
        type="date"
        variant="outlined"
        fullWidth
        value={newTaskDeadline}
        onChange={(e) => setNewTaskDeadline(e.target.value)}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask} fullWidth>
        Add Task
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TodoList;
