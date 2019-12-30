// profile/mutations.ts
import { MutationTree } from "vuex";
import { ProfileState } from "../types";

export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state, payload) {
    state.error = false;
    state.book = payload;
  },
  profileError(state) {
    state.error = true;
    state.book = {};
  }
};
