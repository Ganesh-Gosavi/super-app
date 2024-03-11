import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
