import {UPDATE_PLANT_DATA} from '../actions/actionTypes'

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
  return {
    areas: action.payload
  }
}

export default areas
