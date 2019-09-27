export default  {
    install: function(Vue){
        Vue.mixin({
            created(){
                // console.log(this.$options)
                if(this.$options.isVuex){
                    import('../store/modules/'+this.$options.name).then((res)=>{
                        this.$store.registerModule(this.$options.name,res.default);
                    })
                }
            }
        })
    }
}