import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="/" element={<Layout />}>
          <Route path="example" element={<Example />} />
          <Route path="*" element={<ErrorPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;