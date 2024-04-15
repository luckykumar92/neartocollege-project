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
  IsVerified,
} from "@/components/Auth/auth.js";
import {
  HomePage,
  ShopLocations,
  TermsAndConditions,
  PrivacyPolicy,
  RefundAndCancellation,
  Faq,
  Contactus,
  PrintNow,
  Cart,
  About,
} from "./pages/pages.js";
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
        element: <Contactus />,
      },
      {
        path: "about-us",
        element: <About />,
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
      // {
      // path: "/test",
      // element: <Test />,
      //},
      // {
      //   path: "/how-it-works",
      //   element: <HowItWorks />,
      // },
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

      // ##################  Auth ##################

      {
        path: "/verifyemail",
        element: <IsVerified />,
      },
      // {
      //   path: "/fpmail",
      //   element: <FPMail />,
      // },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
