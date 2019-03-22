import {UPDATE_PLANT_DATA} from '../actions/actionTypes'
import {buildDatasourceFromData} from './utils'

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

const updatePlantData = ({state, action}) => {
  const instantiatedObjects = action.payload.map(machine => {
    return buildDatasourceFromData(machine)
  })

  return {
    areas: instantiatedObjects
  }
}

export default areas
