import { instance } from "api";

const setAxiosSession = (session) => {
 instance.defaults.headers.post["Authorization"] = session;
 instance.defaults.headers.common["Authorization"] = session;

 if (session) localStorage.setItem("session", session);
 else localStorage.removeItem("session");
}

export default setAxiosSession;