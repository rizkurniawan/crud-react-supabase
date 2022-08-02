import { BrowserRouter, Routes, Route } from "react-router-dom";

// import screen
import List from "./screen/List";
import Tambah from "./screen/Tambah";
import Ubah from "./screen/Ubah";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="tambah" element={<Tambah />} />
        <Route path="ubah/:id" element={<Ubah />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
