import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="hidden md:flex">
        {/* sidebar */}
        <div
          className={`min-h-screen bg-base-200 fixed ${!active && "hidden"}`}
        >
          <div>
            <h1 className="text-3xl font-bold border-b-2 border-b-indigo-700 py-2 bg-indigo-700 text-white text-center">
              Dashboard
            </h1>
          </div>
          <ul className="menu w-64 text-base">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Invoices</a>
            </li>
            <li>
              <a>Create Invoice</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <li>
              <a>Tasks</a>
            </li>
            <li>
              <a>Calendar</a>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* main content */}
        <div className={`w-full ${active && "ml-64"}`}>
          <nav className="sticky top-0 w-full bg-indigo-500 flex">
            <button className="px-2" onClick={() => setActive(!active)}>
              <svg
                className="swap-off fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </button>

            <h1 className="text-3xl text-white font-bold border-b-2 border-b-indigo-500 py-2">
              Navbar
            </h1>
          </nav>
          <div className="">
            <p className="text-center bg-gray-300 py-16">Content 1</p>
            <p className="text-center bg-gray-300 py-16">Content 2</p>
            <p className="text-center bg-gray-300 py-16">Content 3</p>
            <p className="text-center bg-gray-300 py-16">Content 4</p>
            <p className="text-center bg-gray-300 py-16">Content 5</p>
            <p className="text-center bg-gray-300 py-16">Content 6</p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="border-b-2 border-b-indigo-700 py-2 bg-indigo-700 flex justify-between px-2 items-center">
          <label htmlFor="my-drawer-2" className="drawer-button">
            <svg
              className="swap-off fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <h1 className="text-3xl font-bold text-white text-center">Navbar</h1>
        </div>
        <div className="md:hidden drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <div className="">
              <p className="text-center bg-gray-300 py-16">Content 1</p>
              <p className="text-center bg-gray-300 py-16">Content 2</p>
              <p className="text-center bg-gray-300 py-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates perspiciatis beatae earum cupiditate facilis
                aspernatur aut impedit voluptatibus natus cumque. Tempora non
                sunt porro id harum maxime quisquam blanditiis facere
                dignissimos. Veniam nisi quasi placeat cupiditate perferendis
                tempora. Neque facilis unde consectetur quis vero optio dolorem
                quibusdam, minus delectus magnam.
              </p>
              <p className="text-center bg-gray-300 py-16">Content 4</p>
              <p className="text-center bg-gray-300 py-16">Content 5</p>
              <p className="text-center bg-gray-300 py-16">Content 6</p>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Invoices</a>
              </li>
              <li>
                <a>Create Invoice</a>
              </li>
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
              <li>
                <a>Tasks</a>
              </li>
              <li>
                <a>Calendar</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
