import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import history from './history';
import Dashboard from './layout/Dashboard';

export default function App() {
  return (
    <Router history={history}>
      <Dashboard/>
    </Router>
  );
}