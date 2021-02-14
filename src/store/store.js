import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        navShow:true,
        dialogShow:false
    },
    mutations:{
        navSwitch(state,payload){
            state.navShow=payload;
        },
        profDialogSwitch(state,payload){
            state.dialogShow=payload;
        }
    }
})