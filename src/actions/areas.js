import {UPDATE_PLANT_DATA} from './actionTypes'

export function updatePlantData({data}) {
  return {
    type: UPDATE_PLANT_DATA,
    payload: data,
  }
}

export function fetchPlantData() {
  return dispatch => {
    fetch("http://demo.etechsystems.com/interview_problem_data.json")
      .then(res => res.json())
      .then(response => dispatch(updatePlantData({data: response.areas})))
      .catch(error => console.log(error))
  }
}
