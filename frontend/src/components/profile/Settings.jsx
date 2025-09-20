import { useUserStore } from "@/store/useUserStore";
import { useState } from "react";

export default function Settings({ user }) {
  const { updateProfile } = useUserStore();

  const [updatedUser, setUpdatedUser] = useState({
    avatar: user?.avatar || "",
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const success = await updateProfile(updatedUser, user._id);
    if (success) {
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 p-4 border-b border-gray-200">
        Manage Your Account
      </h2>

      <div className="p-4 space-y-6 w-full">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture
            </label>
            <input
              type="url"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"

              value={updatedUser.avatar}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, avatar: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full name"
              value={updatedUser.name}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email address"
              value={updatedUser.email}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your phone number"
              value={updatedUser.phone}
              onChange={(e) =>
                setUpdatedUser({ ...updatedUser, phone: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>

    </div>
  );
}
