import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Nav from "./components/nav/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <>
    <Nav />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
