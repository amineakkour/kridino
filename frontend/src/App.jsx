import Home from "./pages/Home";
import Skeleton from "./components/Skeleton";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Kridi from "./pages/Kridis";
import AddKridi from "./pages/AddKridi";
import AddClient from "./pages/AddClient";
export default function App(){

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Skeleton />}>

          <Route index element={<Home />} />

          <Route path="kridis">
            <Route index element={<Kridi />} />
            <Route path="ajouter" element={<AddKridi />} />
          </Route>

          <Route path="clients">
            <Route index element={<Clients />} />
            <Route path="ajouter" element={<AddClient />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}