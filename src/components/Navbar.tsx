import { NavigationItem } from "@/types/types";
import NavbarButton from "./NavbarButton";

interface NavbarProps {
  navigationItems: NavigationItem[];
}

const Navbar = ({ navigationItems }: NavbarProps) => {
  return (
    <div className="bg-black text-white fixed bottom-0 left-0 w-full flex items-center justify-center space-x-10">
      {navigationItems.map((item, key) => (
        <NavbarButton key={key} navigationItem={item} />
      ))}
    </div>
  );
};

export default Navbar;
