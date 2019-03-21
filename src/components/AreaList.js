import * as React from 'react'

const AreaList = ({areas}) => {
  if (!areas) return null

  return areas.map(machine => {
    const {id, name, efficiency, fault} = machine
    let color = "red"

    if (efficiency >= 80) {
      color = "green"

    } else if (efficiency > 60 && efficiency < 80) {
      color = "yellow"
    }

    const styles = {
      ...equipmentStyle,
      color,
    }

    return (
      <div key={id} style={styles}>
        <div>{id}</div>
        <div>{name}</div>
        <div>{efficiency}</div>
        <div>{`${fault}`}</div>
      </div>
    )
  })
}

const equipmentStyle = {
  width: 100,
  height: 100,
  padding: 10,
  backgroundColor: "black",
  margin: 5,
}

export default AreaList
