// profile/index.ts
import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ProfileState, RootState } from "../types";

export const state: ProfileState = {
  user: { firstName: "我的姓氏" },
  book: {}
};
const namespaced: boolean = true;
export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
