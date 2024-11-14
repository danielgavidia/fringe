"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import XNavbar from "./XNavbar";
import { UserButton } from "@clerk/nextjs";

export default function NavbarManager() {
  const { isSignedIn } = useAuthContext();
  return isSignedIn ? (
    <div>
      <XNavbar
        pathHome="/feed"
        pathLikes="/likes"
        pathMatches="/matches"
        pathSettings="/settings"
        development={false}
      />
      <UserButton afterSignOutUrl="/" />
    </div>
  ) : null;
}
