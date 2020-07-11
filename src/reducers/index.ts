import { combineReducers } from 'redux'
import todoReducer, { TodoState } from './todoReducer'

const rootReducer = combineReducers({
  todo: todoReducer
})

export type RootState = {
  todo: TodoState
}

export default rootReducer