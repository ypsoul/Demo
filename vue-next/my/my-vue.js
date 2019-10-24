let toProxy = new WeakMap() //存储  原始--响应
let toRaw = new WeakMap() //存储  响应--原始

const baseHander = {
    get(target, key) {
        const res = Reflect.get(target, key)

        //收集依赖
        track(target, key)
        // 递归查找
        return typeof res === 'object' ? reactive(res) : res
    },
    set(target, key, val) {
        const info = {
            oldValue: target[key],
            newValue: val
        }

        // if(target.hasOwnProperty(key)){ // 即如果触发的是私有属性，可以直接触发视图更新,length会屏蔽掉
        //     trigger();
        // }

        const res = Reflect.set(target, key, val)

        // 触发更新
        trigger(target, key, info)
        return res
    }
}

function reactive(target) {
    // 查询缓存
    let observed = toProxy.get(target)
    if (observed) {
        return observed;
    }
    if (toRaw.get(target)) {
        return target
    }
    observed = new Proxy(target, baseHander)
    //设置缓存
    toProxy.set(target, observed)
    toRaw.set(observed, target)
    return observed
}

let effectStack = []
let tagetMap = new WeakMap() //存储effect

function trigger(target, key, info) {
    const depsMap = tagetMap.get(target)

    if (depsMap === undefined) {
        return
    }
    const effects = new Set()
    const computedRuners = new Set()
    if (key) {
        let deps = depsMap.get(key)
        deps.forEach((effect) => {
            if(effect.computed){
                computedRuners.add(effect)
            }else{
                effects.add(effect)
            }

        })
    }
    // const run = effect =>effect()
    effects.forEach(effect => effect())
    computedRuners.forEach(effect => effect())
}


function track(target,key) {
    let effect = effectStack[effectStack.length - 1]
    if (effect) {
        let depsMap = tagetMap.get(target)
        if (depsMap === undefined) {
            depsMap = new Map()
            tagetMap.set(target, depsMap)
        }
        let dep = depsMap.get(key)
        if (dep === undefined) {
            dep = new Set()
            depsMap.set(key, dep)
        }
        if (!dep.has(effect)) {
            dep.add(effect)
            effect.deps.push(dep)
        }
    }
}

function effect(fn, options={}) {
    let e = createReactiveEffect(fn, options)
    if(!options.lazy){
        e()
    }
    return e
}

function createReactiveEffect(fn, options) {
    const effect = function effect(...args) {
        return run(effect, fn, args)
    }
    effect.deps = []

    effect.computed = options.computed
    effect.lazy = options.lazy
    return effect
}

function run(effect, fn, args) {
    if (effectStack.indexOf(effect) === -1) {
        try {
            effectStack.push(effect)
            return fn(...args)
        } finally {
            effectStack.pop()
        }
    }
}

function computed(fn) {
    const runner = effect(fn,{computed:true,lazy:true})
    return {
         effect:runner,
         get value(){
             return runner()
         }
    }
}