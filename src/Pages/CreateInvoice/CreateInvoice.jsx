/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AutoComplete from "../../components/AutoComplete/AutoComplete";

const countries = ["Africa", "Armenia", "Canada", "United States"];

const customerInitialData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

const initialInvoiceItems = [
  { name: "", productCode: "", quantity: "", productPrice: "" },
];

const CreateInvoice = () => {
  const [value, setValue] = useState("");
  const [customer, setCustomer] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [invoiceItems, setInvoiceItems] = useState(initialInvoiceItems);

  const handleAddRow = () => {
    setInvoiceItems([
      ...invoiceItems,
      { name: "", productCode: "", quantity: "", productPrice: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedItems = [...invoiceItems];
    updatedItems.splice(index, 1);
    setInvoiceItems(updatedItems);
  };

  const handleProductChange = (index, field, value) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index][field] = value;
    setInvoiceItems(updatedItems);
  };

  const handleSubmit = () => {
    console.log(invoiceItems);
  };

  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>Create Invoice</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Create Invoice</h2>
      </div>
      <div className="bg-base-100 rounded py-10 px-16 mt-2">
        <div className="flex justify-between items-start">
          <h2 className="text-4xl text-primary">InvoicePro</h2>
          <div>
            <h2 className="text-2xl">INVOICE</h2>
            <p className="text-end">#INV001</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-lg mb-1">Bill To</h3>
            <input
              type="text"
              placeholder="Name"
              className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
            />
            <br />
            <input
              type="text"
              placeholder="Mobile"
              className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
            />
            <br />
            <input
              type="text"
              placeholder="Address"
              className="input input-sm input-bordered focus:outline-none w-full max-w-xs"
            />
          </div>
          <div>
            <div className="">
              <label className="text-sm text-gray-500" htmlFor="in-date">
                Date
              </label>
              <input
                type="date"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="text-sm text-gray-500" htmlFor="in-date">
                Due Date
              </label>
              <input
                type="date"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="divider mb-0 mt-2"></div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-center">
                  <th>SL</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((r, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <AutoComplete
                        index={i}
                        value={r.name}
                        setValue={handleProductChange}
                        items={countries}
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        placeholder="1"
                        className="input input-sm mb-1 input-bordered focus:outline-none w-16 max-w-xs ms-5 text-center"
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input
                        readOnly
                        type="number"
                        placeholder="1"
                        className="input input-sm mb-1 input-bordered focus:outline-none w-16 max-w-xs ms-5 text-center"
                      />
                    </td>
                    <td>
                      <input
                        readOnly
                        type="text"
                        placeholder="1"
                        className="input input-sm mb-1 input-bordered focus:outline-none w-20 max-w-xs ms-5 text-center"
                      />
                    </td>
                    <td>
                      <span
                        onClick={() => handleRemoveRow(i)}
                        className="bg-red-100 py-2 px-3 rounded-md cursor-pointer"
                      >
                        <i className="fas fa-trash-alt text-red-700"></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleAddRow}
              className="btn btn-primary btn-sm mt-2"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="divider mb-0 mt-2"></div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500">Note:</p>
            <textarea
              className="textarea textarea-bordered focus:outline-none w-96 h-24"
              placeholder="Note: Any Notes About This Invoice"
            ></textarea>
          </div>
          <div className="flex flex-col items-end">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Sub Total</td>
                    <td>
                      <input
                        type="text"
                        placeholder="$00"
                        className="input input-sm mb-1 input-bordered focus:outline-none w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Discount</td>
                    <td>
                      <input
                        type="text"
                        placeholder="$00"
                        className="input input-sm mb-1 input-bordered focus:outline-none w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Total</td>
                    <td>
                      <input
                        type="text"
                        placeholder="$00"
                        className="input input-sm mb-1 input-bordered focus:outline-none w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="divider mb-0 mt-2"></div>

        <div className="flex justify-center mt-5">
          <button onClick={handleSubmit} className="btn btn-primary me-2">
            Save
          </button>
          <button type="submit" className="btn btn-neutral">
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
