Vue.component('ejemplocomp',{
    data:function(){
        return{
            contador:0
        }
    },

    template:'<div><button v-on:click="contador++">Haz click aqui...!!!</button> <span>{{contador}}</span></div>'
})

var vm = new Vue({
    el:'#root'
})

var vm1 = new Vue({
    el:'#master'
})