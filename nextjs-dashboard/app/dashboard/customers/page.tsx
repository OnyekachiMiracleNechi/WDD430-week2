import type { Metadata } from "next";
import { PlusIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Customers</h1>

      {/* Search + Create Button */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-1/3 px-3 py-2 border rounded-md focus:outline-none"
        />
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          <PlusIcon className="h-5 w-5" />
          Create Customer
        </button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="border-t">
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">john@example.com</td>
              <td className="px-4 py-3">+1 (555) 123-4567</td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline mr-4">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
