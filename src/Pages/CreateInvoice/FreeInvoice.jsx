/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

const customerInitialData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

const sellerInitialData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

const initialInvoiceItems = [
  {
    name: "",
    quantity: 1,
    productPrice: 0,
    amount: 0,
  },
];

const todayDate = (addDay) => {
  const date = new Date();
  date.setDate(date.getDate() + addDay);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

const FreeInvoice = () => {
  const ref = useRef();
  const [note, setNote] = useState();
  const [customer, setCustomer] = useState(customerInitialData);
  const [seller, setSeller] = useState(sellerInitialData);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState(todayDate(0));
  const [dueDate, setDueDate] = useState(todayDate(2));
  const [invoiceItems, setInvoiceItems] = useState(initialInvoiceItems);
  const [invoiceNum, setInvoiceNum] = useState("#INV001");
  const [companyName, setCompanyName] = useState("CompanyName");

  useEffect(() => {
    const subTotalPrice = invoiceItems.reduce((sum, item) => {
      console.log(sum, item, item.amount);
      return sum + item.amount;
    }, 0);
    setSubTotal(subTotalPrice);
  }, [invoiceItems]);

  useEffect(() => {
    const totalPrice = subTotal - discount;
    setTotal(totalPrice);
  }, [subTotal, discount]);

  const handleAddRow = () => {
    setInvoiceItems([
      ...invoiceItems,
      {
        name: "",
        quantity: 1,
        productPrice: 0,
        amount: 0,
      },
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

  const handleCustomerChange = (field, value) => {
    setCustomer({ ...customer, [field]: value });
  };

  const handleSellerChange = (field, value) => {
    setSeller({ ...seller, [field]: value });
  };

  const handleSubmit = () => {
    const invoiceData = {
      invoiceNumber: invoiceNum,
      customer,
      products: invoiceItems,
      subTotal,
      discount,
      total,
      date,
      dueDate,
    };
  };

  return (
    <>
      <div className="px-8 md:px-28 py-3 bg-[#F1F5F9] min-h-screen">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl underline">Create Invoice</h2>
          <p className="bg-red-100 text-red-500 py-2 px-3 rounded-md">
            Please Log In For Save Your Invoice
          </p>
        </div>
        <div className="bg-base-100 rounded py-10 px-16 mt-2">
          <div className="flex justify-between items-start">
            <input
              type="text"
              placeholder="#INV001"
              className="input mb-1 input-bordered focus:outline-none w-full max-w-xs text-4xl text-primary"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />

            <div>
              <h2 className="text-2xl text-right">INVOICE</h2>
              <input
                type="text"
                placeholder="#INV001"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs text-right"
                value={invoiceNum}
                onChange={(e) => setInvoiceNum(e.target.value)}
                required
              />
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
                value={customer.name}
                onChange={(e) => handleCustomerChange("name", e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
                value={customer.email}
                onChange={(e) => handleCustomerChange("email", e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Mobile"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
                value={customer.mobile}
                onChange={(e) => handleCustomerChange("mobile", e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Address"
                className="input input-sm input-bordered focus:outline-none w-full max-w-xs"
                value={customer.address}
                onChange={(e) =>
                  handleCustomerChange("address", e.target.value)
                }
                required
              />
            </div>
            <div>
              <h3 className="text-lg mb-1">Bill From</h3>
              <input
                type="text"
                placeholder="Name"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
                value={seller.name}
                onChange={(e) => handleSellerChange("name", e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
                value={seller.email}
                onChange={(e) => handleSellerChange("email", e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Mobile"
                className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
                value={seller.mobile}
                onChange={(e) => handleSellerChange("mobile", e.target.value)}
                required
              />
              <br />
              <input
                type="text"
                placeholder="Address"
                className="input input-sm input-bordered focus:outline-none w-full max-w-xs"
                value={seller.address}
                onChange={(e) => handleSellerChange("address", e.target.value)}
                required
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="">
                <label className="text-sm text-gray-500" htmlFor="in-date">
                  Due Date
                </label>
                <input
                  type="date"
                  className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
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
                        <input
                          type="text"
                          placeholder="Product Name"
                          className="input input-sm mb-1 input-bordered focus:outline-none w-full max-w-xs ms-5"
                          value={r.name}
                          onChange={(e) =>
                            handleProductChange(i, "name", e.target.value)
                          }
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          placeholder="1"
                          className="input input-sm mb-1 input-bordered focus:outline-none w-16 max-w-xs ms-5 text-center"
                          value={r.quantity}
                          onChange={(e) =>
                            handleProductChange(i, "quantity", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="1"
                          className="input input-sm mb-1 input-bordered focus:outline-none w-16 max-w-xs ms-5 text-center"
                          value={r.productPrice}
                          onChange={(e) =>
                            handleProductChange(
                              i,
                              "productPrice",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <input
                          readOnly
                          type="text"
                          placeholder="1"
                          className="input input-sm mb-1 input-bordered focus:outline-none w-20 max-w-xs ms-5 text-center"
                          value={(r.amount = r.quantity * r.productPrice)}
                          onChange={(e) =>
                            handleProductChange(i, "amount", e.target.value)
                          }
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
                value={note}
                onChange={(e) => setNote(e.target.value)}
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
                          value={subTotal}
                          // onChange={(e) => setSubTotal(e.target.value)}
                          required
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
                          value={discount}
                          onChange={(e) => setDiscount(e.target.value)}
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
                          value={total}
                          // onChange={(e) => setTotal(e.target.value)}
                          required
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
            <ReactToPrint
              trigger={() => (
                <button onClick={handleSubmit} className="btn btn-primary me-2">
                  Print
                </button>
              )}
              content={() => ref.current}
            />
          </div>
        </div>
      </div>
      {/* print version */}
      <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen hidden">
        <div className="bg-base-100 rounded py-10 px-16 mt-2">
          {/*  */}
          <div className="print:px-8 print:py-12" ref={ref}>
            <div className="flex justify-between items-start">
              <h2 className="text-4xl text-primary">{companyName}</h2>
              <div>
                <h2 className="text-2xl">INVOICE</h2>
                <p className="text-end">{invoiceNum}</p>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-lg mb-1">Bill To</h3>
                <p className="text-sm">{customer.name}</p>
                <p className="text-sm">{customer.email}</p>
                <p className="text-sm">{customer.mobile}</p>
                <p className="text-sm">{customer.address}</p>
              </div>
              <div>
                <h3 className="text-lg mb-1">Bill From</h3>
                <p className="text-sm">{companyName}</p>
                <p className="text-sm">{seller.email}</p>
                <p className="text-sm">{seller.mobile}</p>
                <p className="text-sm">{seller.address}</p>
              </div>
            </div>
            <div>
              <p className="text-sm">Date: {date}</p>
              <p className="text-sm">Due Date: {dueDate}</p>
            </div>
            <div className="divider mb-0 mt-2"></div>
            <div className="">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-cente">
                      <th>SL</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceItems.map(
                      ({ name, quantity, productPrice, amount }, i) => (
                        <tr key={i} className="">
                          <th>{i + 1}</th>
                          <td>
                            <p>{name}</p>
                          </td>
                          <td>
                            <p>{quantity}</p>
                          </td>
                          <td>
                            <p>{productPrice}</p>
                          </td>
                          <td>
                            <p>{quantity * productPrice}</p>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="divider mb-0 mt-2"></div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-gray-500">
                  Note: {note ? note : "Thank You"}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <td>Sub Total</td>
                        <td>
                          <p className="ms-8">{subTotal}</p>
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <td>Discount</td>
                        <td>
                          <p className="ms-8">{discount}</p>
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <td>Total</td>
                        <td>
                          <p className="ms-8">{total}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="divider mb-0 mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default FreeInvoice;
