import produce from 'immer'
import {UPDATE_PLANT_DATA} from '../actions/actionTypes'
import {buildDatasourceFromData} from './utils'

const initialState = {
  groupedByArray: undefined,
  groupedByIds: {},
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
  let newState = produce(state, draftState => draftState)

  action.payload.forEach(machine => {
    const instaObject = buildDatasourceFromData(machine)
    const {id} = instaObject

    const previousMachineState = newState.groupedByIds[id]

    if (previousMachineState) {
      const mergedObject = {
        ...previousMachineState,
        efficiency: instaObject.efficiency,
        idle: instaObject.idle,
        fault: instaObject.fault,
      }

      newState = produce(newState, draftState => {
        draftState.groupedByIds[id] = mergedObject
      })
    } else {
      newState = produce(newState, draftState => {
        draftState.groupedByIds[id] = instaObject
      })
    }
  })

  newState = produce(newState, draftState => {
    const arrayFromObject = Object.values(newState.groupedByIds)

    draftState.groupedByArray =
      arrayFromObject && arrayFromObject.length ? arrayFromObject : []
  })

  return newState
}

export default areas
