import {GET_MACHINE_UPDATES} from '../actions/actionTypes'

const initialState = {
  areas: [],
}

const areas = (state = initialState, action) => {
  switch(action.type) {
    case GET_MACHINE_UPDATES:
      return getMachineUpdates({state, action})

    default:
      return state
  }
}

const getMachineUpdates = ({state, action}) => {
  return {
    areas: action.payload
  }
}

export default areas
