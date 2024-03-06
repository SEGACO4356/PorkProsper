import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Nav from "./components/nav/Nav";
import TasksPage from "./pages/Users/UsersPage/UsersPage";
import UsersFormPage from "./pages/Users/UsersFormPage/UsersFormPage";
import Categories from "./pages/categories/categories";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<TasksPage />} />
        <Route path="/create-user" element={<UsersFormPage />} />
        <Route path="/users/:id" element={<UsersFormPage />} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;