import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage, RestoreAccess } from "../pages";
import AuthSocial from "../pages/auth/AuthSocial";

const publicRoutes = createBrowserRouter([
  {
    path: "/oauth/:authBy/",
    element: <AuthSocial/>,
   },
 {
  path: "/sign-in",
  element: <AuthPage/>,
 },
 {
  path: "/sign-up",
  element: <AuthPage isReg={true} />,
 },
 {
  path: "/forgot-password",
  element: <RestoreAccess />,
 },
 {
  path: "*",
  element: <Navigate to="sign-in" replace />,
 }
]);

export default publicRoutes;
