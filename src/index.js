import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={process.env.PUBLIC_URL + '/en/'} element={<Home />} />
        <Route
        path={process.env.PUBLIC_URL + '/*'}
        element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
