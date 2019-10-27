import React from "./react"
import ReactDOM from "./react-dom"

const ele = (
  <div className="active" title="123">
    hello,<span>react</span>
  </div>
)
console.log(ele)
ReactDOM.render(ele,document.getElementById("root"))