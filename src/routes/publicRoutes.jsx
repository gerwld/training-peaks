import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage, RestoreAccess } from "../pages";

const publicRoutes = createBrowserRouter([
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
