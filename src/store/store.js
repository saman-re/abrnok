import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        navShow:true,
    },
    mutations:{
        navSwitch(state,payload){
            console.log('befor',state.navShow);
            state.navShow=payload;
            console.log('after',state.navShow);
        }
    }
})