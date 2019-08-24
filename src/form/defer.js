import React, { useState, useEffect } from 'react'

const defer = Component => {
  const Defer = props => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    return <Component mounted={mounted} {...props} />
  }

  return Defer
}

export default defer
