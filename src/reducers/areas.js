import {UPDATE_PLANT_DATA} from '../actions/actionTypes'
import {buildDatasourceFromData} from './utils'

const initialState = {
  groupedByArray: undefined,
  groupedByIds: undefined,
}

const areas = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_PLANT_DATA:
      return updatePlantData({state, action})

    default:
      return state
  }
}

const updatePlantData = ({state, action}) => {
  const instantiatedObjects = action.payload.map(machine => {
    const instaObject = buildDatasourceFromData(machine)
    const {id} = instaObject

    if (state.groupedByIds === undefined) {
      state.groupedByIds = {[id]: instaObject}

    } else {
      const oldMachine = state.groupedByIds[id]
      if (oldMachine) {
        const mergedObject = {
          ...oldMachine,
          efficiency: instaObject.efficiency,
          idle: instaObject.idle,
          fault: instaObject.fault,
        }

        state.groupedByIds[id] = mergedObject
      } else {
        state.groupedByIds[id] = instaObject
      }
    }

    return instaObject
  })

  console.log(state.groupedByIds)

  return {
    groupedByArray: instantiatedObjects,
  }
}

export default areas
