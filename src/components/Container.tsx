import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='container'>
      <div className='content'>
        <section>{children}</section>
      </div>
    </div>
  )
}
