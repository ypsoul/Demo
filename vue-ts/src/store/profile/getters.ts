// profile/getters.ts
import { GetterTree } from "vuex";
import { ProfileState, RootState } from "../types";

export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const { user } = state;
    const firstName = (user && user.firstName) || "";
    const lastName = (user && user.lastName) || "你的名";
    return `${firstName} ${lastName}`;
  }
};
