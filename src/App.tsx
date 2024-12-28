import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseEffectExample from "./views/useEffect";
import UseRefExample from "./views/useRef";
import UseMemoExample from "./views/useMemo";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        UseEffect Example
      </Link>
      <Link to="/useref" style={styles.link}>
        UseRef Example
      </Link>
      <Link to="/usememo" style={styles.link}>
        UseMemo Example
      </Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<UseEffectExample />} />
          <Route path="/useref" element={<UseRefExample />} />
          <Route path="/usememo" element={<UseMemoExample />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Inline styling for the navbar (optional)
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    padding: "0.5rem 1rem",
  },
};
