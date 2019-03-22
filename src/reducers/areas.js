import {UPDATE_PLANT_DATA} from '../actions/actionTypes'
import {buildDatasourceFromData} from './utils'

const initialState = {
  groupedByArray: undefined,
  test: undefined,
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
    if (state.test === undefined) {
      state.test = {id: instaObject}
    } else {
      const oldMachine = state.test[id]
      if (oldMachine) {
        const mergedObject = {
          ...oldMachine,
          efficiency: instaObject.efficiency,
          idle: instaObject.idle,
          fault: instaObject.fault,
        }

        state.test[id] = mergedObject
      } else {
        state.test[id] = instaObject
      }
    }

    console.log(state.test[4])

    return instaObject
  })



  return {
    groupedByArray: instantiatedObjects
  }
}

export default areas
