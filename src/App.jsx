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
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import AddProduct from "./Pages/Products/AddProduct";
import AddCustomer from "./Pages/Customers/AddCustomer";
import EditProduct from "./Pages/Products/EditProduct";
import EditCustomer from "./Pages/Customers/EditCustomer";
import InvoiceDetails from "./Pages/Invoice/InvoiceDetails";

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
          path: "/dashboard/invoices/:id",
          element: <InvoiceDetails />,
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
          path: "/dashboard/add-product",
          element: <AddProduct />,
        },
        {
          path: "/dashboard/edit-product/:id",
          element: <EditProduct />,
        },
        {
          path: "/dashboard/customers",
          element: <Customers />,
        },
        {
          path: "/dashboard/add-customer",
          element: <AddCustomer />,
        },
        {
          path: "/dashboard/edit-customer/:id",
          element: <EditCustomer />,
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
        {
          path: "/dashboard/update-profile",
          element: <UpdateProfile />,
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
