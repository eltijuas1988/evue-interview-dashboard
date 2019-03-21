import * as React from 'react'
import injectSheet from 'react-jss'
import {TEAL} from '../constants'

const Machine = (props) => {
  const {classes, id, name, efficiency, fault} = props

  return (
    <div className={classes.root}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{efficiency}</div>
      <div>{`${fault}`}</div>
    </div>
  )
}

const determineEfficiencyColor = ({efficiency}) => {
  let color = "red"

  if (efficiency >= 80) {
    color = "green"

  } else if (efficiency > 60 && efficiency < 80) {
    color = "yellow"
  }

  return color
}

const styles = {
  root: {
    width: 100,
    height: 100,
    padding: 10,
    color: props => determineEfficiencyColor({efficiency: props.efficiency}),
    backgroundColor: "black",
    border: ["2px", "solid", TEAL],
    borderRadius: 5,
    margin: 5,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
}

export default injectSheet(styles)(Machine)
