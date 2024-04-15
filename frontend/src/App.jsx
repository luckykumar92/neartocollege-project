import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login, logout } from "./redux/features/auth/authSlice.js";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header/Header.jsx";
import Footer from "./components/common/Footer/Footer.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("/api/v1/users/getuser")
      .then((userData) => {
        if (userData) {
          dispatch(login(userData.data.data));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
