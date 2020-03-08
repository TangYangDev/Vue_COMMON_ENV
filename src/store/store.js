import Vuex from "vuex";

import defaultState from "./state/state";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";
import actions from "./actions/actions";

//规范代码,是否允许外部修改Vuex.Store内部数据
const isDev = process.env.NODE_ENV === "development";

export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
  });
};

/** ===================================================
模块化扩展说明：
    Vue.Store具有Modudles属性
    举例:
     modudle:{
       a:{
         namespaced: true, 
         state:{

         },
         mutations: {

         },
         getters: {

         },
         actions:{

         }
       }
     }
     说明：a为自定义模块名称，state，mutations, getters, 
     actions 使用方法均与上者相同, namespaced解决命名冲突

     当命名相同时,调用方式例如: 
     ...mapMutations{['update', 'a/update']}
     this['a/update'](参数)
=======================================================*/