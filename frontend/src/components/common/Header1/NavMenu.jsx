import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import React from "react";

const NavMenu = () => {
  const navItems = [
    {
      name: "Home",
      slug: "#hero",
      active: true,
      css: "",
    },
    {
      name: "About",
      slug: "#about-us",
      active: true,
      css: " underline",
    },
    {
      name: "Services",
      slug: "#services",
      active: true,
      css: " underline",
    },
    {
      name: "Team",
      slug: "#team",
      active: true,
      css: " underline",
    },
    {
      name: "Contact",
      slug: "#contact",
      active: true,
      css: " underline",
    },
  ];

  const triggeredNavMenu = [
    {
      menuBarName: "Psychology",
      menuBarItems: [
        { name: "CBT Cohorts", slug: "https://psychology.hugg.co.in" },
        { name: "Join our team", slug: "mailto:careers@hugg.co.in" },
      ],
    },
    // {
    //   menuBarName: "Psychology2",
    //   menuBarItems: [
    //     { name: "link1", slug: "#", active: true, css: " underline" },
    //     { name: "link2", slug: "#", active: true, css: " underline" },
    //   ],
    // },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Menu className="text-black" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 mt-5">
        <DropdownMenuGroup className="mt-5">
          {navItems.map((nav, index) => (
            <DropdownMenuItem key={index} className="focus:bg-[#17AD94]">
              <Link
                href={nav.slug}
                className="w-full m-0 text-[#151515] py-2 px-5 font-[600]">
                {nav.name}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger className="focus:bg-[#17AD94]">
              <span className="w-full m-0 text-[#151515] py-2 px-5 font-[600]">
                Psychology
              </span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="focus:bg-[#17AD94]">
                  <a
                    className="w-full m-0 text-[#151515] py-2 px-5 font-[600]"
                    href="https://psychology.hugg.co.in">
                    CBT Cohorts
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#17AD94]">
                  <a
                    className="w-full m-0 text-[#151515] py-2 px-5 font-[600]"
                    href="mailto:careers@hugg.co.in">
                    Join our team
                  </a>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
