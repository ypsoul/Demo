// 抽象类
var Car = function(){};
Car.prototype = {
    getPrice:function(){
        return new Error("抽象方法不可以调用")
    },
    getSpeed:function(){
        return new Error("抽象方法不能调用")
    }
}


// 抽象工厂方法
var VehicleFactory = function(subType,superType){
    //判断抽象工厂中是否含有抽象类
    if(typeof VehicleFactory[superType]==='function'){
        //缓存类
        function F(){};
        F.prototype = new VehicleFactory[superType]();
        //将子类的constructor指向子类
        subType.constructor = subType;
        //子类原型继承父类
        subType.prototype = new F()
    }else{
        throw new Error('未创建该抽象类')
    }
}

//小汽车的抽象类
VehicleFactory.Car = function(){
    this.type = 'car'
}
VehicleFactory.Car.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用')
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用')
    }
};

//公交车抽象类
VehicleFactory.Bus = function(){
    this,type = 'bus'
}
VehicleFactory.Bus.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用')
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用')
    }
};

//货车抽象类
VehicleFactory.Truck = function(){
    this,type = 'truck'
}
VehicleFactory.Truck.prototype = {
    getPrice:function(){
        return new Error('抽象方法不能调用')
    },
    getSpeed:function(){
        return new Error('抽象方法不能调用')
    }
};

// 使用

// 宝马汽车子类
var BMW = function(price,speed){
    this.price = price;
    this.speed = speed;
}
VehicleFactory(BMW,'Car')
BMW.prototype.getPrice = function(){
    return this.price
}
BMW.prototype.getSpeed = function(){
    return this.speed
}

// 宇通公交子类
var YUTONG = function(price,speed){
    this.price = price;
    this.speed = speed;
}
VehicleFactory(YUTONG,'Bus')
YUTONG.prototype.getPrice = function(){
    return this.price
}
YUTONG.prototype.getSpeed = function(){
    return this.speed
}

// 使用
var bmw = new BMW(1000000,10000);
console.log(bmw.getPrice())
console.log(bmw.type)

//通过抽象工厂就能知道每个子类到底是哪一类类别的，然后他们具备了该类的所必备的属性和方法。