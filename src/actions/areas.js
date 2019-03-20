import {GET_MACHINE_UPDATES} from './actionTypes'

export function getMachineUpdates({data}) {
  return {
    type: GET_MACHINE_UPDATES,
    payload: data,
  }
}
