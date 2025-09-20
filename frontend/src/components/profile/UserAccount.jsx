import React from 'react'

function UserAccount({ user }) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-md shadow-sm p-4">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Account Overview
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Account Details */}
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            ACCOUNT DETAILS
          </h3>
          <p className="text-gray-800 font-medium">{user?.name}</p>
          <p className="text-gray-600 text-sm">{user?.email}</p>
        </div>

        {/* Address Book */}
        <div className="border border-gray-200 rounded-md p-4 relative">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            ADDRESS BOOK
          </h3>
          <p className="text-gray-800 font-medium">Your default shipping address:</p>
          <p className="text-gray-600 text-sm">Abdul Karim Yakubu</p>
          <p className="text-gray-600 text-sm">Teiman bus station</p>
          <p className="text-gray-600 text-sm">Teiman, Greater Accra</p>
          <p className="text-gray-600 text-sm">+233 544776000</p>

          {/* Edit Icon */}
          <button className="absolute top-4 right-4 text-orange-500 hover:text-orange-600">
            ✏️
          </button>
        </div>

        {/* Jumia Store Credit */}
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            JUMIA STORE CREDIT
          </h3>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline text-sm"
          >
            Jumia store credit balance: GH₵ 0.00
          </a>
        </div>

        {/* Newsletter Preferences */}
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            NEWSLETTER PREFERENCES
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            Manage your email communications to stay updated with the latest
            news and offers.
          </p>
          <a
            href="#"
            className="text-orange-500 font-medium hover:underline text-sm"
          >
            Edit Newsletter preferences
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserAccount