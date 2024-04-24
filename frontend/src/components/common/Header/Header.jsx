import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import {
  CircleUserRound,
  CreditCard,
  LogOut,
  Menu,
  Settings,
  User,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "@/redux/features/auth/authSlice";
import Swal from "sweetalert2";

const sideBarItems = [
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

const userMenuItems = [
  {
    name: "Profile",
    icon: <User className="mr-2 h-4 w-4" />,
    slug: "#",
    active: true,
  },
  {
    name: "Orders",
    icon: <CreditCard className="mr-2 h-4 w-4" />,
    slug: "#",
    active: true,
  },
  {
    name: "Settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
    slug: "#",
    active: true,
  },
];

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.post("/api/v1/users/logout");
      dispatch(logout());
      setLoading(false);
      Swal.fire("Logout Successfully", "", "success");
    } catch (error) {
      setLoading(false);
      Swal.fire(`${error.response.data.message}`, "", "error");
    }
  };

  const authItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  // -----------------------
  const userMenuList = authStatus ? userMenuItems : authItems;
  return (
    <div className="shadow sticky z-50 top-0 max-[480px]:m-0 max-[480px]:p-0 border-none rounded-none bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* -------- Logo---------- */}
        <div className="md:order-1 order-2">
          <Link to="/">
            <div>
              <Logo />
            </div>
          </Link>
        </div>
        {/* --------- UserMenu and Cart ---------- */}
        <div className="flex flex-row space-x-5 md:order-3 order-3">
          {/* --------------- Cart ------------ */}
          {/* <div className="flex items-center">
            <ShoppingCart className="w-8 h-8" />
          </div> */}
          {/* ------------- UserMenu----------- */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <CircleUserRound className="w-8 h-8" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-50 mt-4">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              <DropdownMenuGroup>
                {userMenuList.map((u) => (
                  <DropdownMenuItem key={u.name}>
                    {u.icon}
                    <Link to={u.slug}>{u.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              {authStatus && <DropdownMenuSeparator />}
              {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}
              {authStatus && (
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <button onClick={logoutHandler}>Logout</button>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* -------------- NavBar ---------------------- */}
        <div className="hidden md:flex md:order-2">
          <NavBar />
        </div>
        <div className="hidden max-[767px]:flex order-1">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu className="text-black" />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Neartocollege</SheetTitle>
              </SheetHeader>
              <Separator className="mt-3 h-1 bg-black" />
              <div className="p-6 w-full flex flex-col flex-wrap">
                <ul className="space-y-1.5">
                  {sideBarItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.slug}
                        className="w-full text-start flex items-center gap-x-3.5 py-2 px-2.5
                            text-sm text-slate-700 rounded-lg hover:bg-gray-100
                            dark:bg-gray-800 dark:hover:bg-gray-900
                            dark:text-slate-400 dark:hover:text-slate-300
                            dark:hs-accordion-active:text-white
                            dark:focus:outline-none dark:focus:ring-1
                            dark:focus:ring-gray-600"
                      >
                        <SheetClose asChild>
                          <SheetTitle>{item.name}</SheetTitle>
                        </SheetClose>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* -------------------------------------------------- */}
        {loading && <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default Header;
