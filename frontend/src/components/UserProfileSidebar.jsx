import React from "react";
import {
  Code,
  Settings,
  LogOut,
  User,
  Book,
  Award,
  School,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { useUserStore } from "@/store/useUserStore";


const SideBarProfile = ({
  user,
  active,
  setActive,
}) => {
  const {logout } = useUserStore();
  
  const menuItems = [
    { id: 0, icon: User, label: "My Account", show: true },
    { id: 1, icon: Book, label: "Orders", show: true },
    { id: 2, icon: Settings, label: "Settings", show: true },
    { id: 3, icon: LockKeyhole, label: "Change Password", show: true },
    {
      id: 4,
      icon: ShieldCheck,
      label: "Admin Dashboard",
      show: user?.role === "admin",
      isLink: true,
      href: "/admin",
    },
  ];

  const MenuItem = ({ item }) => {
    const Icon = item.icon;
    const isActive = active === item.id;

    return (
      <div className="lg:w-full">
        {item.isLink ? (
          <Link
            href={item.href}
            target="_blank"
            className={cn(
              "flex items-center gap-3 p-2 w-full rounded-lg transition-all duration-200",
              isActive
                ? "bg-accent text-wbgimptext dark:text-dbgimptext"
                : "hover:bg-accent/10"
            )}
          >
            <Icon
              size={20}
              className="shrink-0"
            />
            <span className="hidden md:inline-block whitespace-nowrap">
              {item.label}
            </span>{" "}
          </Link>
        ) : (
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center justify-center md:justify-start gap-3 px-3 py-2 min-w-[50px]",
              "hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
              isActive &&
                "bg-white dark:bg-black text-wbgimptext dark:text-dbgimptext"
            )}
            onClick={() => setActive(item.id)}
          >
            <Icon
              size={20}
              className="shrink-0 text-gray-500 dark:text-gray-300"
            />
            <span className="hidden md:inline-block whitespace-nowrap">
              {item.label}
            </span>
          </Button>
        )}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col gap-1 p-4 bg-wbg dark:bg-bgaccent border border-gray-500 border-opacity-25 dark:border-bdcl rounded-lg shadow-lg 
    w-[50px] md:w-[250px] transition-all duration-200"
    >
      {/* User Info */}
      <div className="flex flex-col items-center md:w-full transition-all duration-200 gap-2">
        <Avatar className="h-10 w-10 border-2 border-wbgimptext dark:border-dbgimptext">
          <AvatarImage src={user?.avatar|| ""} />
          <AvatarFallback className="bg-accent">
            {user?.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <span className="hidden md:inline-block whitespace-nowrap">
          {user?.name}
        </span>
      </div>

      <Separator className="my-2" />

      {/* Menu Items */}
      <nav className={`flex flex-col items-center md:gap-3 md:px-3 py-4`}>
        {menuItems.map(
          (item) => item.show && <MenuItem key={item.id} item={item} />
        )}
      </nav>

      {/* Log Out Button */}
      <Button
        variant="ghost"
        className="w-full flex items-center justify-center md:justify-start gap-3 px-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
        onClick={logout}
      >
        <LogOut size={20} className="shrink-0" />
        <span className="absolute hidden md:relative md:inline-block">
          Log Out
        </span>
      </Button>
    </div>
  );
};

export default SideBarProfile;
