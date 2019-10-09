<!-- button -->
<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    text: {
      type: String,
      default: "normal"
    }
  },
  render(h) {
    return h("button", {
      // v-bind
      class: {
        btn: true,
        "btn-success": this.type === "success",
        "btn-danger": this.type === "dangerous",
        "btn-warning": this.type === "warning",
        normal: this.type === "normal"
      },
      // dom 属性
      domProps: {
        innerHTML: this.text || "默认"
      },
      // 事件
      on: {
        click: this.handleClick
      }
    });
  },
  methods: {
    handleClick() {
      this.$emit("myClick", "参数");
    }
  }
};
</script>
<style scope>
.btn {
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.normal {
  color: white;
}
.btn-success {
  color: green;
}
.btn-danger {
  color: red;
}
.btn-warning {
  color: orange;
}
</style>