import axios from "axios";

export function setAxiosSession(session) {
 axios.defaults.headers.post["Authorization"] = session;
 axios.defaults.headers.common["Authorization"] = session;

 if (session) localStorage.setItem("session", session);
 else localStorage.removeItem("session");
}
