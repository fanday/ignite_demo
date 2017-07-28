import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  increment: null,
  decrement: null
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

let count = 0;
export const INITIAL_STATE = Immutable({
  count: count
})

/* ------------- Reducers ------------- */

// increment count
export const incrementCount = (state) => {return Immutable({
  count: count++
})}

// decrement count
export const decrementCount = (state) => {return Immutable({
  count: count--
})}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: incrementCount,
  [Types.DECREMENT]: decrementCount
})

/* ------------- Selectors ------------- */
