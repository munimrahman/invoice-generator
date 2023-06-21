/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import listPlugin from "@fullcalendar/list"; // needed for dayClick
// import AutocompleteInput from "./AutoTest";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const options = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];
  const [value, setValue] = useState("");
  //a list of countries to show the dropdown
  const countries = ["Africa", "Armenia", "Canada", "United States"];

  console.log(currentEvents);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  // test
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [showPrint, setShowPrint] = useState(false);

  const addInvoiceItem = () => {
    setInvoiceItems([
      ...invoiceItems,
      { description: "", quantity: "", price: "" },
    ]);
  };

  const removeInvoiceItem = (index) => {
    const updatedItems = [...invoiceItems];
    updatedItems.splice(index, 1);
    setInvoiceItems(updatedItems);
  };

  const handleCustomerChange = (field, value) => {
    setCustomer({ ...customer, [field]: value });
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index][field] = value;
    setInvoiceItems(updatedItems);
  };

  const calculateSubTotal = () => {
    return invoiceItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    return subTotal - discount;
  };

  const saveData = () => {
    console.log({ customer, invoiceItems, discount });
    window.print();
  };

  const togglePrintView = () => {
    setShowPrint(!showPrint);
  };
  return (
    <div className="p-5">
      {/* <div>
        <FullCalendar
          height="83vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2022-09-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2022-09-28",
            },
          ]}
        />
      </div> */}

      <div
        className={`bg-gray-100 min-h-screen ${showPrint ? "print-mode" : ""}`}
      >
        <header className="bg-white py-4 shadow">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold">Invoice App</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Customer Information</h2>
            <div className="flex items-center mb-4">
              <input
                type="text"
                className="border rounded py-2 px-3 mr-2"
                placeholder="Customer Name"
                value={customer.name}
                onChange={(e) => handleCustomerChange("name", e.target.value)}
              />
              <input
                type="text"
                className="border rounded py-2 px-3 mr-2"
                placeholder="Customer Email"
                value={customer.email}
                onChange={(e) => handleCustomerChange("email", e.target.value)}
              />
              <input
                type="text"
                className="border rounded py-2 px-3 mr-2"
                placeholder="Customer Address"
                value={customer.address}
                onChange={(e) =>
                  handleCustomerChange("address", e.target.value)
                }
              />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Invoice Items</h2>
            {invoiceItems.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  className="border rounded py-2 px-3 mr-2"
                  placeholder="Item description"
                  value={item.description}
                  onChange={(e) =>
                    handleInputChange(index, "description", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="border rounded py-2 px-3 mr-2"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleInputChange(index, "quantity", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="border rounded py-2 px-3 mr-2"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) =>
                    handleInputChange(index, "price", e.target.value)
                  }
                />
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => removeInvoiceItem(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={addInvoiceItem}
            >
              Add Item
            </button>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Discount</h2>
            <input
              type="text"
              className="border rounded py-2 px-3"
              placeholder="Discount"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <div>
              <p>Sub Total: ${calculateSubTotal()}</p>
              <p>Discount: ${discount}</p>
              <p>Total: ${calculateTotal()}</p>
            </div>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={saveData}
          >
            Save and Log Data
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded ml-4"
            onClick={togglePrintView}
          >
            {showPrint ? "Exit Print View" : "Print"}
          </button>
        </main>
        <footer className="bg-gray-200 py-4">
          <div className="container mx-auto px-4">
            <p className="text-sm text-center text-gray-500">
              © {new Date().getFullYear()} Invoice App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Calendar;
