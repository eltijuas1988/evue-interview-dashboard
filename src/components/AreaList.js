import * as React from 'react'
import injectSheet from 'react-jss'
import {TEAL} from '../constants'
import Machine from './Machine'

const AreaList = ({classes, title, machines, type}) => {
  if (!machines) return null

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
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
  title: {
    fontSize: 25,
    color: TEAL,
  },
  area: {
    display: 'flex',
  },
}

export default injectSheet(styles)(AreaList)
