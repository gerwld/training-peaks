import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useSession(getUser, setInit, isInit) {
 const d = useDispatch();
 useEffect(() => {
  const getCurrentUser = async () => {
   if (!isInit) {
    const session = localStorage.getItem("session");
    if (session) await d(getUser(session));
    await d(setInit(true));
   }
  };

  getCurrentUser();
 }, []);
}
