import * as Types from './../constants/ActionType';

var initialState = [
    {
        id: 1,
        name: 'hello'
    },
    {
        id: 2,
        name: 'buddy'
    }
]; // String, Array, Object,...

const products = (state = initialState, action) => {

    switch(action.type) {
        default:
            return [...state]; // copy new array and return it
    }

}

export default products;