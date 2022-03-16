import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Bands from "./bands/Bands";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="bands" element={<Bands />} />
      </Route>
    </Routes>
  );
}

export default App;
