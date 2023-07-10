/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useGetSingleInvoiceQuery } from "../../features/invoice/invoiceApi";
import { useParams } from "react-router-dom";

const InvoiceDetails = () => {
  const ref = useRef();
  const { id } = useParams();
  const {
    data: {
      data: {
        invoiceNumber,
        customer: { name, mobile, email, address } = {},
        products = [],
        date,
        dueDate,
        subTotal,
        discount,
        total,
        note,
      } = {},
    } = {},
  } = useGetSingleInvoiceQuery(id);

  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>Invoice Details</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Invoice</h2>
      </div>
      <div className="bg-base-100 rounded py-10 px-16 mt-2">
        {/*  */}
        <div className="print:px-8 print:py-12" ref={ref}>
          <div className="flex justify-between items-start">
            <h2 className="text-4xl text-primary">InvoicePro</h2>
            <div>
              <h2 className="text-2xl">INVOICE</h2>
              <p className="text-end">#INV00{invoiceNumber}</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-lg mb-1">Bill To</h3>
              <p className="text-sm">{name}</p>
              <p className="text-sm">{email}</p>
              <p className="text-sm">{mobile}</p>
              <p className="text-sm">{address}</p>
            </div>
            <div>
              <h3 className="text-lg mb-1">Bill From</h3>
              <p className="text-sm">Invoice Pro</p>
              <p className="text-sm">invoice@gmail.xom</p>
              <p className="text-sm">01548156415</p>
              <p className="text-sm">Barishal, Bangladesh</p>
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
                  <tr className="text-center">
                    <th>SL</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(
                    ({ name, quantity, productPrice, amount }, i) => (
                      <tr key={i} className="text-center">
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
                          <p>{amount}</p>
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
              <p className="text-sm text-gray-500">Note: Thank You</p>
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

        <div className="flex justify-center mt-5">
          <ReactToPrint
            trigger={() => <button className="btn btn-neutral">Print</button>}
            content={() => ref.current}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
