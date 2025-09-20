import { useState } from "react";

export default function UserOrders() {
  const [activeTab, setActiveTab] = useState("ongoing");

  const orders = [
    {
      id: 1,
      title: "Adaptateur - USB-C - HDMI Type C Vers 4K HDMI VGA - 87W - Grey",
      orderId: "349384126",
      status: "DELIVERED",
      date: "11-09-2024",
      image: "https://via.placeholder.com/100x100.png?text=USB-C",
    },
    {
      id: 2,
      title: '6" Ring Light Phone Selfie Holder Stand Shooting With 3 Light Modes',
      orderId: "349384126",
      status: "DELIVERED",
      date: "12-09-2024",
      image: "https://via.placeholder.com/100x100.png?text=Ring+Light",
    },
    {
      id: 3,
      title:
        "75''/6 Feet/190CM Photography Light Stands for Reflectors, Softboxes, Ligh...",
      orderId: "349384126",
      status: "DELIVERED",
      date: "13-09-2024",
      image: "https://via.placeholder.com/100x100.png?text=Light+Stand",
    },
    {
      id: 4,
      title: "Professional LED Video Light Photography Light Panel",
      orderId: "349384126",
      status: "DELIVERED",
      date: "13-09-2024",
      image: "https://via.placeholder.com/100x100.png?text=LED+Panel",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 p-4 border-b border-gray-200">
        Orders
      </h2>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "ongoing"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-600 hover:text-orange-500"
          }`}
        >
          ONGOING/DELIVERED (22)
        </button>
        <button
          onClick={() => setActiveTab("canceled")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "canceled"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-600 hover:text-orange-500"
          }`}
        >
          CANCELED/RETURNED (8)
        </button>
      </div>

      {/* Orders List */}
      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-start border border-gray-200 rounded-md p-4"
          >
            {/* Image */}
            <img
              src={order.image}
              alt={order.title}
              className="w-20 h-20 object-cover rounded-md border mr-4"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{order.title}</p>
              <p className="text-xs text-gray-500">Order {order.orderId}</p>

              {/* Status & Date */}
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xs font-semibold text-white bg-green-600 rounded px-2 py-0.5">
                  {order.status}
                </span>
                <span className="text-sm text-gray-600">
                  On {order.date}
                </span>
              </div>
            </div>

            {/* See details */}
            <button className="text-sm text-orange-500 hover:underline ml-4">
              See details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
