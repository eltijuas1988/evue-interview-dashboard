import * as React from 'react'
import injectSheet from 'react-jss'
import {CircularProgress} from '../material-ui'
import {GRAY} from '../constants'

const ProgressCircle = (props) => {
  const {classes, value, variant="static"} = props
  return (
    <div className={classes.root}>
      <CircularProgress
        className={classes.circleShadow}
        variant={variant}
        value={100}
        thickness={9}
        size={50}
      />
      <CircularProgress
        className={classes.efficiency}
        variant={variant}
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
    alignSelf: "center",
    width: 50,
  },
  efficiency: {
    color: props => props.color,
    position: "absolute",
    left: 0,

  },
  circleShadow: {
    color: GRAY,
  },
}

export default injectSheet(styles)(ProgressCircle)
