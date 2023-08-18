import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import Register from "./signup/components/Register";
import Login from "./signin/components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="signup" element={<Register />} />
              <Route path="signin" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );

}

export default App;
