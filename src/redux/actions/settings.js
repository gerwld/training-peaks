import { toast } from "react-hot-toast";
import PlanService from "../../api/PlanService";

export const setCurrentPlan = (id, startEpochDate) => {
  PlanService.setCurrentPlan(id, startEpochDate)
   .then(({ data }) => {
    toast.success('Settings saved.')
   })
   .catch(error => {
    toast.error(error.message || "Error");
    throw new Error(error);
   }) 
 }