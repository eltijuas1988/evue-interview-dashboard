import * as React from 'react'
import injectSheet from 'react-jss'
import {CircularProgress} from '../material-ui'
import {GRAY} from '../constants'

const ProgressCircle = ({classes, value}) => {
  return (
    <div className={classes.root}>
      <CircularProgress
        className={classes.circleShadow}
        variant="static"
        value={100}
        thickness={9}
        size={50}
      />
      <CircularProgress
        className={classes.efficiency}
        variant="static"
        value={value}
        thickness={9}
        size={50}
      />
    </div>
  )
}

const styles = {
  root: {
    position: "relative",
  },
  efficiency: {
    color: props => props.color,
    position: "absolute",
    left: 38,

  },
  circleShadow: {
    color: GRAY,
  },
}

export default injectSheet(styles)(ProgressCircle)
