import {combineReducers} from 'redux'
import produce from 'immer'
import areas from './areas'

const reducer = produce(combineReducers({areas}), draftState => draftState)

export default reducer
