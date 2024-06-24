import React, { PropsWithChildren } from 'react'

const Deco = ({
  children,
  color,
  italic,
}: PropsWithChildren<{ color?: string; italic?: boolean }>) => {
  return (
    <span
      className="font-bold text-primary-600"
      style={{ color, fontStyle: italic ? 'italic' : 'inherit' }}
    >
      {children}
    </span>
  )
}

export default Deco
