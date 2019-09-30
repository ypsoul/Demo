// 建造者模式：将一个复杂对象的构建层与表现层相互分离。更关心构建对象的细节。
 
// 分---合

//创建一人类

var Human = function(param){
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密';
}

// 类原型方法
Human.prototype = {
    getSkill:function(){
        return this.skill
    },
    getHobby:function(){
        return this.hobby
    }
}

//实例化姓名类
var Named = function(name){
    var that = this;
    // 解析姓名
    (function(name,that){
        that.wholeName = name;
        if(name.indexOf(' ')>-1){
            that.FirstName = name.slice(0,name.indexOf(' '));
            that.SecondName = name.slice(name.indexOf(' '))
        }
    })(name,that)
}

// 实例化职业类

var Work = function(work){
    var that = this;
    (function(work,that){
        switch(work){
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天沉醉于写代码';
                break;
            case 'UI':
                that.work = '设计师';
                that.workDescript = '设计更是一种艺术';
                break;
            case 'Teach':
                that.work = '教师';
                that.workDescript = '园丁也是个很好的工作';
                break;
            default:
                that.work = work;
                that.workDescript = '对该职位描述还不是很清楚';
        }
    })(work,that)
}

// 期待的职务

Work.prototype.changeWork = function(work){
    this.work = work;
}

// 职位描述
Work.prototype.changeDscript = function(setence){
    this.workDescript = setence
}

/**
 * 应聘者构造者
 * 姓名
 * 职位
*/

var Person = function(name,work){
    //创建缓存对象
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person
}


var p1 = new Person('xiao ming','code')

console.log(p1.skill) // 保密
console.log(p1.name.FirstName) // xiao
console.log(p1.work.workDescript) // 每天沉醉于写代码

p1.work.changeDscript('更改一下职位描述')
console.log(p1.work.workDescript) // 更改一下职位描述