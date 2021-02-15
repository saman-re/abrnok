import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        navShow:true,
        dialogShow:false,
        profile:{
            email:'',
            userName:'',
            emailVerified:false,
            token:'',
        },
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
        },
        profileSet(state,payload){
            state.profile.email=payload.user.email;
            state.profile.userName=payload.user.full_name;
            state.profile.emailVerified=payload.user.is_email_verified;
            state.profile.token=payload.token
        }
    }
})