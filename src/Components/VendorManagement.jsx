import React, { useState } from "react";

import VendorForm from "./VendorForm";

const VendorManagement = () => {
  const [open, setOpen] = useState(false);
  const [vendors] = useState([
    {
      id: 50012,
      name: "Vendor Name",
      contact: "Contact Name",
      altName: "Alternate Name",
      contactEmail: "Contact Email",
      altEmail: "Alternate Email",
      service: "Product/Service",
      Category: "Category",
      product: "Product management",
      AditionalInfo: "Additional Information",
      BankName: "Bank Name",
      BranchName: "Branch Name",
      IFSC: "IFCS Code",
      BankingName: "Banking Name",
    },

    {
      id: 50013,
      name: "Vendor Name",
      contact: "Contact Name",
      altName: "Alternate Name",
      contactEmail: "Contact Email",
      altEmail: "Alternate Email",
      service: "Product/Service",
      Category: "Category",
      product: "Product management",
      AditionalInfo: "Additional Information",
      BankName: "Bank Name",
      BranchName: "Branch Name",
      IFSC: "IFCS Code",
      BankingName: "Banking Name",
    },

    {
      id: 50014,
      name: "Vendor Name",
      contact: "Contact Name",
      altName: "Alternate Name",
      contactEmail: "Contact Email",
      altEmail: "Alternate Email",
      service: "Product/Service",
      Category: "Category",
      product: "Product management",
      AditionalInfo: "Additional Information",
      BankName: "Bank Name",
      BranchName: "Branch Name",
      IFSC: "IFCS Code",
      BankingName: "Banking Name",
    },

    {
      id: 50015,
      name: "Vendor Name",
      contact: "Contact Name",
      altName: "Alternate Name",
      contactEmail: "Contact Email",
      altEmail: "Alternate Email",
      service: "Product/Service",
      Category: "Category",
      product: "Product management",
      AditionalInfo: "Additional Information",
      BankName: "Bank Name",
      BranchName: "Branch Name",
      IFSC: "IFCS Code",
      BankingName: "Banking Name",
    },

    {
      id: 50016,
      name: "Vendor Name",
      contact: "Contact Name",
      altName: "Alternate Name",
      contactEmail: "Contact Email",
      altEmail: "Alternate Email",
      service: "Product/Service",
      Category: "Category",
      product: "Product management",
      AditionalInfo: "Additional Information",
      BankName: "Bank Name",
      BranchName: "Branch Name",
      IFSC: "IFCS Code",
      BankingName: "Banking Name",
    },

    {
      id: 50017,
      name: "Vendor Name",
      contact: "Contact Name",
      altName: "Alternate Name",
      contactEmail: "Contact Email",
      altEmail: "Alternate Email",
      service: "Product/Service",
      Category: "Category",
      product: "Product management",
      AditionalInfo: "Additional Information",
      BankName: "Bank Name",
      BranchName: "Branch Name",
      IFSC: "IFCS Code",
      BankingName: "Banking Name",
    },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Vendors Management</h1>
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Create
        </button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2 pl-10 w-80"
            placeholder="Search"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.9-5.4A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 017.05 7.05z"
              />
            </svg>
          </span>
        </div>
        <button className="flex items-center bg-gray-100 p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 12.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-8.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          Filter
        </button>
      </div>

      {open && <VendorForm />}

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Vendor ID</th>
            <th className="py-2 px-4 border-b">Vendor Name</th>
            <th className="py-2 px-4 border-b">Contact Name</th>
            <th className="py-2 px-4 border-b">Alternate Name</th>
            <th className="py-2 px-4 border-b">Contact Email</th>
            <th className="py-2 px-4 border-b">Alternate Email</th>
            <th className="py-2 px-4 border-b">Product/Service</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Product Management</th>
            <th className="py-2 px-4 border-b">Additional Information</th>
            <th className="py-2 px-4 border-b">Bank Name</th>
            <th className="py-2 px-4 border-b">Baranch Name</th>
            <th className="py-2 px-4 border-b">IFSC Code</th>
            <th className="py-2 px-4 border-b">Banking Name</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td className="py-2 px-4 border-b">{vendor.id}</td>
              <td className="py-2 px-4 border-b">{vendor.name}</td>
              <td className="py-2 px-4 border-b">{vendor.contact}</td>
              <td className="py-2 px-4 border-b">{vendor.altName}</td>
              <td className="py-2 px-4 border-b">{vendor.contactEmail}</td>
              <td className="py-2 px-4 border-b">{vendor.altEmail}</td>
              <td className="py-2 px-4 border-b">{vendor.service}</td>
              <td className="py-2 px-4 border-b">{vendor.product}</td>
              <td className="py-2 px-4 border-b">{vendor.Category}</td>
              <td className="py-2 px-4 border-b">{vendor.AditionalInfo}</td>
              <td className="py-2 px-4 border-b">{vendor.BankName}</td>
              <td className="py-2 px-4 border-b">{vendor.BranchName}</td>
              <td className="py-2 px-4 border-b">{vendor.IFSC}</td>
              <td className="py-2 px-4 border-b">{vendor.BankingName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg">Prev</button>
          <button className="px-3 py-1 border rounded-lg">Next</button>
        </div>
        <div className="flex items-center space-x-2">
          <span>Page: 1 of 5</span>
          <select className="border p-1 rounded-lg">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
