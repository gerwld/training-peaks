import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useSession(getUser, setInit, isInit) {
 const dispatch = useDispatch();
 useEffect(() => {
  const getCurrentUser = async () => {
   if (!isInit) {
    const session = localStorage.getItem("session");
    if (session) await dispatch(getUser(session));
    await dispatch(setInit(true));
   }
  };

  getCurrentUser();
 }, []);
}
