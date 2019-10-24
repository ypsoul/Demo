let obj = { name :"vue2"}

let o = new Proxy(obj, {
    get(target,key){
        console.log('获取值',key);
        return Reflect.get(target, key);
    },
    set(target,key,val){    
        console.log('修改值',key,val)
        return Reflect.set(target, key, val)
    }
})

o.name="vue3" // 修改值 name vue3
console.log(o.name) // 修改值 name vue3  获取值 name vue3


let arr1 = [1,2,4]

let a = new Proxy(arr1, {
    get(target,key){
        console.log('获取值',key);
        return Reflect.get(target, key);
    },
    set(target,key,val){    
        console.log('修改值',key,val)
        return Reflect.set(target, key, val)
    }
})

a.push(4) // 获取值 push   获取值 length   修改值 3 4    修改值 length 4