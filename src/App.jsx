import React from "react";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { MainLoader } from "./components";
import { Toaster } from "react-hot-toast";
import useSession from "./hooks/useSession";
import { getUser } from "./redux/reducers/auth-reducer";
import { setInit } from "./redux/reducers/app-reducer";
import { useSelector } from "react-redux";

const App = () => {
 const { authObj, isInit } = useSelector(({ auth, app }) => ({
  authObj: auth.authObj,
  isInit: app.isInit,
 }));
 const routes = authObj ? privateRoutes : publicRoutes;

 useSession(getUser, setInit, isInit); 

 if (isInit)
  return (
   <React.Suspense>
    <RouterProvider router={routes} fallbackElement={<MainLoader />} />
    <Toaster />
   </React.Suspense>
  );
 else return <MainLoader />;
};

export default App;
