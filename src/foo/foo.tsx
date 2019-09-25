import React, { lazy } from "react"

const Bar = lazy(async () => {
  let obj = await import("../bar/bar")
  return typeof obj.default === "function" ? obj : obj.default;
})
const Foo = () => {
  return (
    <div>
      <h1>Foo</h1>
      <Bar />
    </div>
  )
}

export default Foo;
