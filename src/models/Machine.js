class Machine {
  constructor(props) {
    const {id, name, efficiency, fault, idle} = props

    this.id = id
    this.name = name
    this.efficiency = efficiency
    this.fault = fault
    this.idle = idle
  }
}

export default Machine
