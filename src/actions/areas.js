import {UPDATE_PLANT_DATA} from './actionTypes'

export function updatePlantData({data}) {
  return {
    type: UPDATE_PLANT_DATA,
    payload: data,
  }
}
