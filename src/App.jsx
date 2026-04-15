// App.jsx
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "@/pages/Accueil";
import TachesOk from "@/pages/TachesOk";
import Layout from "./layouts/Layout";
import Ajouter from "./pages/Ajouter";
import Details from "./pages/Details";

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/taches-ok" element={<TachesOk />} />
          <Route path="/ajouter" element={<Ajouter />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;
