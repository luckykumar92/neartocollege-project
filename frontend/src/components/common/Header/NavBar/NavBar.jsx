import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    slug: "/",
    active: true,
  },
  {
    name: "About",
    slug: "/about-us",
    active: true,
  },
  {
    name: "Shops",
    slug: "/shops",
    active: true,
  },
  {
    name: "Contact",
    slug: "/contact-us",
    active: true,
  },
];
const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link to={item.slug} legacybehavior="true" passhref="true">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
