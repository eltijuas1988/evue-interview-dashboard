import * as React from 'react'
import injectSheet from 'react-jss'

const Machine = (props) => {
  const {classes, id, name, efficiency, fault, type} = props

  return (
    <div className={classes.root}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{efficiency}</div>
      <div>{`${fault}`}</div>
      <div>{type}</div>
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
    margin: 5,
  },
}

export default injectSheet(styles)(Machine)
