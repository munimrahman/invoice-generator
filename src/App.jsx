import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import DashboardLayout from "./components/Layout/DashboardLayout";
import MainLayout from "./components/Layout/MainLayout.jsx";
import DashboardHome from "./Pages/DashboardHome/DashboardHome";
import Invoices from "./Pages/Invoice/Invoices";
import CreateInvoice from "./Pages/CreateInvoice/CreateInvoice";
import Products from "./Pages/Products/Products";
import Customers from "./Pages/Customers/Customers";
import Tasks from "./Pages/Task/Tasks";
import Calendar from "./Pages/Calendar/Calendar";
import Profile from "./Pages/Profile/Profile";

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
          path: "/dashboard/home",
          element: <DashboardHome />,
        },
        {
          path: "/dashboard/invoices",
          element: <Invoices />,
        },
        {
          path: "/dashboard/create-invoice",
          element: <CreateInvoice />,
        },
        {
          path: "/dashboard/products",
          element: <Products />,
        },
        {
          path: "/dashboard/customers",
          element: <Customers />,
        },
        {
          path: "/dashboard/tasks",
          element: <Tasks />,
        },
        {
          path: "/dashboard/calendar",
          element: <Calendar />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
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
