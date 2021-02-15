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
            config:{
                // cpu:NaN,
                // memory:NaN,
                // bandwidth:'',
                // ssd:''
            },
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
        },
        changeOS(state,payload){
            state.server.os=payload
        },
        changeConfig(state,payload){
            state.server.config=payload
            // state.server.config.cpu=payload.cpu;
            // state.server.config.memory=payload.memory;
            // state.server.config.bandwidth=payload.bandwidth;
            // state.server.config.ssd=payload.ssd;
            // console.log(state.config);
        }
    }
})