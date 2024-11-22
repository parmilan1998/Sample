import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";


const AddItems = () => {
  const formik = useFormik({
    initialValues: {
      category: "",
      stockCategory: "",
      productName: "",
      itemId: "",
      description: "",
      stockCount: "",
      buyingPrice: "",
      sellingPrice: "",
      minimumStock: "",
      reorderQuantity: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Category is required"),
      stockCategory: Yup.string().required("Stock category is required"),
      productName: Yup.string().required("Product name is required"),
      itemId: Yup.string().required("Item ID is required"),
      stockCount: Yup.number()
        .required("Stock count is required")
        .min(0, "Stock count must be positive"),
      buyingPrice: Yup.number().required("Buying price is required"),
      sellingPrice: Yup.number().required("Selling price is required"),
      minimumStock: Yup.number()
        .required("Minimum stock is required")
        .min(0, "Minimum stock must be positive"),
      reorderQuantity: Yup.number()
        .required("Reorder quantity is required")
        .min(1, "Reorder quantity must be at least 1"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <form
        className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Add Item</h2>

        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {["Average Cost", "Current Value", "On Hand", "On Order With Supplier", "On Order to Customer"].map(
            (stat) => (
              <div
                key={stat}
                className="p-4 bg-gray-100 rounded-lg text-center text-gray-600"
              >
                <p>{stat}</p>
                <p className="text-xl font-semibold">$0.00</p>
              </div>
            )
          )}
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="Blinds">Blinds</option>
              <option value="Motors">Motors</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Stock Category
            </label>
            <select
              name="stockCategory"
              value={formik.values.stockCategory}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select Stock Category</option>
              <option value="Motor">Motor</option>
              <option value="Accessories">Accessories</option>
            </select>
            {formik.touched.stockCategory && formik.errors.stockCategory && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.stockCategory}
              </p>
            )}
          </div>
        </div>

        {/* Inventory Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Inventory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stock Count
              </label>
              <input
                type="number"
                name="stockCount"
                value={formik.values.stockCount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {formik.touched.stockCount && formik.errors.stockCount && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.stockCount}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Cancel      
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems