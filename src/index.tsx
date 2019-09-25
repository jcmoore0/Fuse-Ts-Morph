import React, { lazy, Suspense } from "react";
import * as ReactDOM from "react-dom";

const Foo = lazy(async () => {
  let o = await import("./foo/foo")
  return typeof o.default === 'function'?o:o.default
  }
)

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Foo />
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))