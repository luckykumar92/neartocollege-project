import React from "react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
// ++++++++++++++++++++++++++++++++++++++++++++
import {
  AuthLayout,
  LoginForm,
  SignupForm,
  ForgotPassword,
  ForgotPasswordChange,
  AccountVerifyOtp,
  LoginWithOtp,
} from "@/components/Auth/auth.js";
import {
  HomePage,
  ShopLocations,
  TermsAndConditions,
  PrivacyPolicy,
  RefundAndCancellation,
  Faq,
  ContactUsPage,
  PrintNow,
  Cart,
  AboutPage,
} from "./pages/pages.js";
import Test from "./pages/Test.jsx";

// ################ Router ###################

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "/shops",
        element: <ShopLocations />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },

      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-and-cancellation",
        element: <RefundAndCancellation />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/test",
        element: <Test />,
      },

      // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

      // ##################  Auth ##################
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginForm />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupForm />
          </AuthLayout>
        ),
      },
      {
        path: "/account-verify",
        element: (
          <AuthLayout authentication={false}>
            <AccountVerifyOtp />
          </AuthLayout>
        ),
      },
      {
        path: "/login-with-otp",
        element: (
          <AuthLayout authentication={false}>
            <LoginWithOtp />
          </AuthLayout>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/printnow",
        element: (
          <AuthLayout authentication>
            <PrintNow />
          </AuthLayout>
        ),
      },
      {
        path: "/printorder",
        element: (
          <AuthLayout authentication>
            <Cart />
          </AuthLayout>
        ),
      },
    ],
  },
]);

export default router;
