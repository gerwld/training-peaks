import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRegStatus } from "../redux/reducers/auth-reducer";

export default function useRegSuccess() {
 const d = useDispatch();
 const n = useNavigate();
 const { regSuccess } = useSelector(({ auth }) => ({
  regSuccess: auth.regSuccess,
 }));

 useEffect(() => {
  if (regSuccess) {
   d(setRegStatus(false));
   n("/sign-in");
  }
 }, [regSuccess]);
}
