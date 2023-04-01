import axios from "axios";
import { instance } from "../api/instance";

export function setAxiosSession(session) {
 instance.defaults.headers.post["Authorization"] = session;
 instance.defaults.headers.common["Authorization"] = session;

 if (session) localStorage.setItem("session", session);
 else localStorage.removeItem("session");
}
