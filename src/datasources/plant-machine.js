class PlantMachine {
  initialize(machine) {
    this.machineReducer(machine)
  }

  machineReducer(machine) {
    const reducedMachine = {
      id: machine.id,
      name: machine.name,
      efficiency: machine.efficiency,
      fault: machine.fault,
      idle: machine.idle,
    }

    return reducedMachine
  }
}

module.exports = PlantMachine
