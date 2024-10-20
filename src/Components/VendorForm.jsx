import React, { useState, useEffect } from 'react';

const VendorForm = () => {
  const [formVisible, setFormVisible] = useState(true); // State to manage form visibility
  const [formData, setFormData] = useState({
    vendorId: '21155', // Example ID
    currentDate: '',   // This will be updated dynamically
    vendorName: '',
    contactName: '',
    alternateName: '',
    contactEmail: '',
    alternateEmail: '',
    productService: '',
    category: '',
    productManagement: '',
    additionalInfo: '',
    bankName: '',
    branchName: '',
    ifscCode: '',
    bankingName: '',
  });

  // To set current date dynamically
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setFormData((prevData) => ({ ...prevData, currentDate }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    // Reset the form and hide it
    setFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform the submit action
  };

  // Only render the form if it is visible
  if (!formVisible) {
    return null; // Return null if the form is hidden
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      {/* Form Title */}
      <h2 className="text-2xl font-semibold bg-gray-400 p-10 text-gray-800 mb-4">Create/ Add Vendor</h2>

      {/* Vendor ID and Current Date */}
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-700">Vendor ID:</label>
          <input
            type="text"
            name="vendorId"
            value={formData.vendorId}
            readOnly
            className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>
        <div className="flex items-center">
          <label className="text-sm font-medium text-gray-700">Date:</label>
          <input
            type="text"
            name="currentDate"
            value={formData.currentDate}
            readOnly
            className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
          />
        </div>
      </div>

      {/* Rest of the Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Vendor Name</label>
          <input
            type="text"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Rest of the fields go here... */}
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Contact Name</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Alternate Name</label>
          <input
            type="text"
            name="alternateName"
            value={formData.alternateName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Continue adding other fields... */}

        {/* New Fields Added */}
        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Product Management</label>
          <input
            type="text"
            name="productManagement"
            value={formData.productManagement}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Additional Information</label>
          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Branch Name</label>
          <input
            type="text"
            name="branchName"
            value={formData.branchName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="w-1/4 text-sm font-medium text-gray-700">Banking Name</label>
          <input
            type="text"
            name="bankingName"
            value={formData.bankingName}
            onChange={handleChange}
            className="flex-grow p-2 ml-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Reset and Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
