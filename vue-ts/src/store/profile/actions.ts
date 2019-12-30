// profile/actions.ts
import { ActionTree } from "vuex";
import axios from "axios";
import { ProfileState, RootState } from "../types";

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url:
        "https://www.ypsoul94.top:1029/api/book/bookList/findBybookCate?Pcid=5d74bc4b8e42ee0f2887c36e&cid=5d3d0506e1d8c632cc000862&pagesize=8&page=1"
    }).then(response => {
      const payload: any = response && response.data && response.data.item;
      commit("profileLoaded", payload);
    });
  }
};
