new Vue({
    el:'#root',
    data:{
        firstName:'张',
        lastName:'三',
        fullName:''
    },
    watch:{
        firstName(newValue,oldValue){
            this.fulltName = newValue + '-' + this.lastName
        }
    }
})