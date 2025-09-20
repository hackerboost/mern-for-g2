import React from "react";
import UserAccount from "./profile/UserAccount";
import UserOrders from "./profile/UserOrders";
import Settings from "./profile/Settings";
import Password from "./profile/Password";

function ContentProfile({ user, active }) {
  return (
    <div className="w-full flex-1 p-6">
      {active === 0 && <UserAccount user={user} />}
      {active === 1 && <UserOrders />}
      {active === 2 && <Settings user={user} />}
      {active === 3 && <Password />}
      {active === 4 && <div>Admin Dashboard Content</div>}
    </div>
  );
}

export default ContentProfile;
