import { instance } from "./instance";

export default class PlanService {
 static async getAllPlans(payload) {
  return instance.get("/plans", payload);
 }
 static async getCurrentPlan() {
  return instance.get("/plans/active");
 }

 static async setCurrentPlan(planId, startAtEpochDate) {
  return instance.get("/users", {
    params: {
      planId,
      startAtEpochDate
    }
  });
 }

 static async getPlan(id) {
  return instance.get(`/plans/${id}`);
 }
 static async createPlan(payload) {
  return instance.post("/plans", payload);
 }
 static async deletePlan(id) {
  return instance.delete(`/plans/${id}`);
 }

 static async addPlanItem(planId, payload) {
  return instance.post(`/plans/${planId}/add-item`, payload);
 }
 static async deletePlanItem(planId, itemId) {
  return instance.delete(`/plans/${planId}/delete-item/${itemId}`);
 }
}
