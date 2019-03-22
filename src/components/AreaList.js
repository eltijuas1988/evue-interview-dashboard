import * as React from 'react'
import injectSheet from 'react-jss'
import {TEAL} from '../constants'
import {CircularProgress} from '../material-ui'
import Machine from './Machine'

const AreaList = ({classes, title, machines, type}) => {
  let rendered
  if (machines === undefined) {
    rendered =
      <div className={classes.progressWrapper}><CircularProgress/></div>

  } else if (machines && machines.length < 1) {
    rendered = <div className={classes.noDataText}>No Data Available</div>

  } else {
    rendered = machines.filter(m => m.type === type).map(machine => {
      return <Machine key={machine.id} {...machine}/>
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.area}>
        {rendered}
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
