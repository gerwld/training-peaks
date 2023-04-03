import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard";

const privateRoutes = createBrowserRouter([
  {
    path: "/oauth/*",
    element: <Navigate to="/" replace />,
   },
 {
  path: "/sign-in",
  element: <Navigate to="/" replace />,
 },
 {
  path: "/login",
  element: <Navigate to="/" replace />,
 },
 {
  path: "/sign-up",
  element: <Navigate to="/" replace />,
 },
 {
  path: "/forgot-password",
  element: <Navigate to="/" replace />,
 },
 {
  path: "/*",
  element: <Dashboard />,
 },
 {
  path: "*",
  element: <Dashboard />,
 },
]);

export default privateRoutes;
