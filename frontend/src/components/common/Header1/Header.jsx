import React from "react";
import NavBar from "./NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import {
  CircleUserRound,
  CreditCard,
  LogOut,
  Menu,
  Settings,
  ShoppingCart,
  SquareUserRound,
  SunMoon,
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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import headerLogo from "@/assets/logo/logo3.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "@/redux/features/auth/authSlice";

const Header = () => {
  // -----------------------------------------------
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await axios.post("/api/v1/users/logout").then(() => {
      dispatch(logout());
      alert("Logout Successfully");
    });
  };
  // -------------------------------------------------------
  const userMenuItems = [
    {
      name: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
      slug: "/",
      active: true,
    },
    {
      name: "Orders",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      slug: "/my-order",
      active: true,
    },
    {
      name: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      slug: "/setting",
      active: true,
    },
  ];
  // ---------------------------

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
              <img src={headerLogo} className="w-64" alt="neartocollege" />
            </div>
          </Link>
        </div>
        {/* ############################ UserMenu ############################ */}
        <div className="flex flex-row space-x-5 md:order-3 order-3">
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

        {/* ############################ NavBar ############################ */}
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
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
