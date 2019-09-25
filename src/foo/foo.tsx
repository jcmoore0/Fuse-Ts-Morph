import React from 'react'

const Bar = React.lazy(() => import('../bar/bar'))

const Foo = () => {
  return (
    <div>
      <h1>Foo</h1>
      <Bar />
    </div>
  )
}

export default Foo
