import "./render.css";
export default {
  render: function (createElement) {
    let _self = this;
    let h1 = createElement(
      //  html标签，组件名称，或者函数
      "h" + this.level,
      // {{Object}} 数据对象
      {
        class: {
          foo: true,
            bar: false
        },
        style: {
          color: "red",
          fontSize: "14px"
        },
        // html 属性
        attrs: {
          id: "foo",
          "data-2": "2"
        },
        // DOM 属性
        domProps: {
          innerHTML: 3333
        },
        // 事件监听 on
        on: {
          // click: this.clickHandler  一般点击事件
          click: function () {
            _self.$emit('myClick', _self.level)
          }
        },
        // 仅用于组件，监听原生事件,比如现在是div,要是组件就行
        // navtiveOn: {
        //   click: _self.navClickHandler
        // },
        // 自定义指令
        // directives: [{
        //   name: 'my-custom-directive',
        //   value: '2', // 绑定值
        //   expression: '1 + 1',
        //   arg: 'foo', // 传给指令的参数
        //   modifiers: { // 含修饰符的对象
        //     bar: true
        //   }
        // }],
        // slot: "my-slot-1",
        key: "my-key",
        ref: "myref",
      },
      // {String | Array}
      // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
      // 也可以使用字符串来生成“文本虚拟节点”。可选。
    )
    let listData;
    if (_self.list.length) {
      listData = createElement('ul',
        _self.list.map((item, index) => createElement('li', {
            key: index,
            style: {
              display: "flex",
            },
          },
          [
            createElement('img', {
              attrs: {
                src: require("@/assets/logo.png")
              }
            }),
            createElement('h1', item.title),
            createElement(
              "div", {
                style: {
                  width: "100px",
                  height: "50px",
                  lineHeight: "50px",
                  color: "white"
                },
                "class": {
                  "blue": item.status === 0,
                  "red": item.status === 1,
                  "gray": item.status === 2,
                },
                domProps: {
                  innerHTML: item.status === 0 ? "未运行" : item.status === 1 ? "运行中" : " 已结束"
                },
              }
            )
          ])))
    } else {
      listData = createElement('p', 'No List Data')
    }
    return createElement('div', [
      h1,
      this.$slots.name1,
      this.$slots.name2,
      listData
    ])
  },
  props: {
    level: {
      type: String,
      default: 1
    },
    list: {
      type: Array,
      default: []
    },
  },
  methods: {
    // clickHandler() {
    //   console.log(1)
    // }
  },
}