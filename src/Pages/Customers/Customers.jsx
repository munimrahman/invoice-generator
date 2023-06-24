/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteCustomerMutation,
  useGetCustomersQuery,
} from "../../features/customer/customerApi";

const Customers = () => {
  const { data: { data: { count, customers = [] } = {} } = {} } =
    useGetCustomersQuery();
  const [deleteProduct] = useDeleteCustomerMutation();

  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>

          <li>Customers</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl underline">Customers</h2>
        <Link to={"/dashboard/add-customer"} className="btn btn-primary">
          Add Customer
        </Link>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded p-2 mt-2">
        <table className="table table-zebra w-full">
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(({ _id, name, email, mobile, address }, i) => (
              <tr key={_id}>
                <th>{i + 1}</th>
                <td>
                  <h3 className="font-bold">{name}</h3>
                </td>
                <td>{mobile}</td>
                <td>{email}</td>
                <td>{address}</td>
                <th className="text-center">
                  <Link
                    to={`/dashboard/edit-customer/${_id}`}
                    className="py-2 px-3 me-2 rounded bg-green-200 hover:cursor-pointer"
                  >
                    <i className="fas fa-edit text-green-800"></i>
                  </Link>

                  <span
                    onClick={() => deleteProduct(_id)}
                    className="py-2 px-3 rounded bg-red-200 hover:cursor-pointer"
                  >
                    <i className="fas fa-trash-alt text-red-600" />
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
