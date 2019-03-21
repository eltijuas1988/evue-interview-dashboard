import * as React from 'react'
import injectSheet from 'react-jss'
import Machine from './Machine'

const AreaList = ({classes, title, machines, type}) => {
  if (!machines) return null

  return (
    <div className={classes.root}>
      <div>{title}</div>
      <div className={classes.area}>
        {machines.filter(m => m.type === type).map(machine => {
          return <Machine key={machine.id} {...machine}/>
        })}
      </div>
    </div>
  )
}

const styles = {
  root: {
    minHeight: 200,
  },
  area: {
    display: 'flex',
  },
}

export default injectSheet(styles)(AreaList)
