import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        navShow:true,
        dialogShow:false,
        server:{
            type:'',
            location:'',
            os:'',
            config:'',
        }
    },
    mutations:{
        navSwitch(state,payload){
            state.navShow=payload;
        },
        profDialogSwitch(state,payload){
            state.dialogShow=payload;
        },
        changeType(state,payload){
            state.server.type=payload;
        },
        changeLocation(state,payload){
            state.server.location=payload
        }
    }
})