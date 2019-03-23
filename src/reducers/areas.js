import produce from 'immer'
import {UPDATE_PLANT_DATA} from '../actions/actionTypes'
import {buildMachineFromModel} from './utils'

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
  const allMachines = action.payload

  allMachines.forEach(machine => {
    const newMachine = buildMachineFromModel(machine)
    const {id} = newMachine
    const previousMachineState = newState.groupedByIds[id]

    if (previousMachineState) {
      const {efficiency, idle, fault} = newMachine

      const mergedObject = {
        ...previousMachineState,
        efficiency,
        idle,
        fault,
      }

      newState = produce(newState, draftState => {
        draftState.groupedByIds[id] = mergedObject
      })
    } else {
      newState = produce(newState, draftState => {
        draftState.groupedByIds[id] = newMachine
      })
    }
  })

  const arrayFromObject = Object.values(newState.groupedByIds)

  newState = produce(newState, draftState => {
    draftState.groupedByArray =
      arrayFromObject && arrayFromObject.length ? arrayFromObject : []
  })

  return newState
}

export default areas
