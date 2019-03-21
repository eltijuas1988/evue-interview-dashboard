import * as React from 'react'
import Machine from './Machine'

const AreaList = ({title, machines, type}) => {
  if (!machines) return null

  return (
    <div>
      <div>{title}</div>
      <div style={mainStyles}>
        {machines.filter(m => m.type === type).map(machine => {
          return <Machine key={machine.id} {...machine}/>
        })}
      </div>
    </div>
  )
}

const mainStyles = {
  display: 'flex',
}

export default AreaList
