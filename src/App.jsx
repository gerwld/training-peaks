import React from "react";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { MainLoader } from "./components";
import { Toaster } from 'react-hot-toast';

const App = () => {
 let authObj = false, isInit = true;
 const routes = authObj ? privateRoutes : publicRoutes;
 
 if(isInit) return (
  <React.Suspense>
    <RouterProvider router={routes} fallbackElement={<MainLoader />} />
    <Toaster />
  </React.Suspense>
 );
 else return <MainLoader />
};


export default App;
