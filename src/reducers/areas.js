import {UPDATE_PLANT_DATA} from '../actions/actionTypes'
import {BlanketFolder, Ironer, Machine, Sorter, Washer} from '../datasources'

const initialState = {
  areas: [],
}

const areas = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_PLANT_DATA:
      return updatePlantData({state, action})

    default:
      return state
  }
}

const buildDatasourcesFromData = data => {
  if (!data) return null

  return data.map(machine => {
    const {name} = machine
    if (name.includes("Sorting")) {
      return new Sorter(machine)

    } else if (name.includes("Washer")) {
      return new Washer(machine)

    } else if (name.includes("Ironer")) {
      return new Ironer(machine)

    } else if (name.includes("Folder")) {
      return new BlanketFolder(machine)

    } else {
      return new Machine(machine)
    }
  })
}

const updatePlantData = ({state, action}) => {
  const test = buildDatasourcesFromData(action.payload)
  return {
    areas: test
  }
}

export default areas
