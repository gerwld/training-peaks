import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInit } from "@/redux/actions/app-actions";
import { getUser } from "../redux/reducers/auth-reducer";

export default function useSession(isInit) {
 const d = useDispatch();
 useEffect(() => {
  const getCurrentUser = () => {
   const session = localStorage.getItem("session");
   if (!isInit && session) {
    session && d(getUser(session));
   } else d(setInit(true));
  };

  getCurrentUser();
 }, []);
}
