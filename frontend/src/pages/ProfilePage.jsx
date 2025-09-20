import ContentProfile from "@/components/ContentProfile";
import SideBarProfile from "@/components/UserProfileSidebar";
import { useUserStore } from "@/store/useUserStore";
import React, { useState } from "react";

function ProfilePage() {
  const { authUser } = useUserStore();
  const [active, setActive] = useState(0);

  console.log("Authenticated User:", authUser);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[90%] border border-black mx-auto flex items-center mt-10 pb-10 px-6">
        <SideBarProfile 
        user={authUser}
        active={active}
        setActive={setActive}
        />
        <ContentProfile
          user={authUser}
          active={active}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
