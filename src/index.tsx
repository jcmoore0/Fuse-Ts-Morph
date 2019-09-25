import React, { lazy, Suspense } from 'react'
import * as ReactDOM from 'react-dom'

const Foo = React.lazy(() => import('./foo/foo'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Foo />
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
