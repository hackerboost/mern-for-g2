"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { useUserStore } from "@/store/useUserStore";

export function DropdownMenuComponent({ authUser }) {
    const {logout} = useUserStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <img
            src={authUser?.avatar || "./avatar.jpeg"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={logout}
          >
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
