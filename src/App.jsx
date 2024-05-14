import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import Livestock from "./pages/Livestock";
import Mapping from "./pages/Mapping";
import Inventory from "./pages/Inventory";
import Accounting from "./pages/Accounting";
import Health from "./pages/Health";
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import Tasks from './pages/Tasks';
import Help from './pages/Help';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#236940', // Example primary color
    },
    secondary: {
      main: '#9cc9ad', // Example secondary color
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/livestock" element={<Livestock />} />
            <Route path="/mapping" element={<Mapping />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/health" element={<Health />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} /> {/* Use uppercase Settings */}
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

