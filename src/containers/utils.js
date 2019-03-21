import * as React from 'react'

export const renderChildrenWithProps = ({children, props}) => {
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      ...props,
    })
  })
}
