import { combineReducers } from 'redux-immutable'
import { reducer as headReducer } from '../component/HeaderSlide/store'

const reducer = combineReducers({
    head: headReducer
})

export default reducer
