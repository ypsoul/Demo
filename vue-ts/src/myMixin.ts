import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters:{
    Test(arg: string){
      return arg + "  我来刷点存在感"
    }
  }
})
export class MyMixin extends Vue{
  public beforeCreate() {
    console.log("beforeCreate 调用") // 前期混合注入 比如你想要的方法调用， vue-router也是在此注册
  }
  public mixinTitle: string = "我是一个测试的mixin 标题";

  getMixinTitle(): void {
    console.log(this.mixinTitle) 
  }
}
