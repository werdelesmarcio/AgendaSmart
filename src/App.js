import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={Login} />
        <Route exact path="/register" element={Register} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
};

export default App;
