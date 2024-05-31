import {createAction, createReducer} from '@reduxjs/toolkit';

const initialState = {
    num: 0,
    text: 'Hello World',
}

export const incrementNum = createAction('INCREMENT_NUM');
export const decrementNum = createAction('DECREMENT_NUM');
export const resetNum = createAction('RESET_NUM');
export const setText = createAction('SET_TEXT');
export const incrementNumByFive = createAction('INCREMENT_NUM_BY_FIVE');

export default createReducer(initialState, (builder) => {
    builder
    .addCase('INCREMENT_NUM', (state, action) => {
        if (state.num < 20) {
            state.num = state.num + 1
        } else {
            state.num = 20
        }
    })
    .addCase('DECREMENT_NUM', (state, action) => {
        if (state.num > 0) {
            state.num = state.num - 1
        } else {
            state.num = 0
        }
    })
    .addCase('RESET_NUM', (state, action) => {
        state.num = 0
    })
    .addCase('SET_TEXT', (state, action) => {
        state.text = action.payload
    })
    .addCase('INCREMENT_NUM_BY_FIVE', (state, action) => {
        if (state.num <= 15) {
            state.num = state.num + 5
        } else {
            state.num = 20
        }
    })
});