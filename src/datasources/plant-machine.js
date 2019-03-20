class PlantMachine {
  initialize(machine) {
    this.machineReducer(machine)
  }

  machineReducer(machine) {
    const {id, name, efficiency, fault, idle} = machine

    const reducedMachine = {
      id,
      name,
      efficiency,
      fault,
      idle,
    }

    return reducedMachine
  }
}

module.exports = PlantMachine
