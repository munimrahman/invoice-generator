import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import DashboardLayout from "./components/Layout/DashboardLayout";
import MainLayout from "./components/Layout/MainLayout.jsx";
import DashboardHome from "./Pages/DashboardHome/DashboardHome";
import Invoices from "./Pages/Invoice/Invoices";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardHome />,
        },
        {
          path: "/dashboard/invoices",
          element: <Invoices />,
        },
        {
          path: "/dashboard/products",
          element: <DashboardHome />,
        },
        {
          path: "/dashboard/customers",
          element: <DashboardHome />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
