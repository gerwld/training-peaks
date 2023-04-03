import { instance } from "./instance"

export default class AuthService {
 static async getAuth(payload) {
  return instance.post("auth/basic/token", payload)
 }

 static async getCurrentUser(payload) {
  return instance.get("/users/current", {
   headers: {
    Authorization: payload,
   },
  })
 }
 static async register(payload) {
  return instance.post("users", payload)
 }
 static async restorePassword(payload) {
  return instance.post("auth/basic/password-reset", payload)
 }
}

export class AuthSocialService {
 static async getClientIDGoogle() {
  return instance.get("/auth/google/client-id", {
   params: {
    token: "72c9e698-6b31-43f6-8db8-e6f7a694bce9",
   },
  })
 }

 static async getJWTAuthByGoogleCode(code) {
  return instance.get("/auth/google/get-token-from-code", {
   params: {
    code,
   },
  })
 }
}
