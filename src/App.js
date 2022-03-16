import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "./layout/Layout";
import Bands from "./bands/Bands";

function App() {
  return (
    <>
      <Helmet>
        <title>Rock &amp; Roll with React</title>
      </Helmet>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="bands" element={<Bands />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
