import { instance } from "./instance";

export default class AuthService {
  static async getAuth(payload) {
    return instance.post("auth/basic/token", payload);
  }

  static async getCurrentUser(payload) {
    return instance.get("/users/current", {
      headers: {
      "Authorization": payload
      }
    });
  }
  static async register(payload) {
    return instance.post("users", payload);
  }
  static async restorePassword(payload) {
    return instance.post("auth/basic/password-reset", payload);
  }
}
