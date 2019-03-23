import * as React from 'react'
import injectSheet from 'react-jss'
import {TEAL} from '../constants'
import {CircularProgress} from '../material-ui'
import Machine from './Machine'

const AreaList = (props) => {
  const {classes, title} = props
  const renderedComponent = determineComponentToRender(props)

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.area}>
        {renderedComponent}
      </div>
    </div>
  )
}

const determineComponentToRender = (props) => {
  const {classes, machines, type} = props

  if (machines === undefined) {
    return <div className={classes.progressWrapper}><CircularProgress/></div>

  } else if (machines && machines.length < 1) {
    return <div className={classes.noDataText}>No Data Available</div>

  } else {
    return machines.filter(m => m.type === type).map(machine => {
      return <Machine key={machine.id} {...machine}/>
    })
  }
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
    display: "flex",
  },
  noDataText: {
    color: "red",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  },
  progressWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}

export default injectSheet(styles)(AreaList)
