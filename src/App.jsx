import React from "react";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { MainLoader } from "./compontents";

const App = () => {
 let authObj = true, isInit = true;
 const routes = authObj ? privateRoutes : publicRoutes;
 
 if(isInit) return (
  <React.Suspense>
    <RouterProvider router={routes} fallbackElement={<MainLoader />} />
  </React.Suspense>
 );
 else return <MainLoader />
};


export default App;
