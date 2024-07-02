import axios from 'axios';

export const getCart = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/cart');
        dispatch({ type: 'GET_CART_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'GET_CART_FAIL', payload: err.response.data.msg });
    }
};

export const addItemToCart = (itemData) => async (dispatch) => {
    try {
        const res = await axios.post('/api/cart', itemData);
        dispatch({ type: 'ADD_ITEM_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'ADD_ITEM_FAIL', payload: err.response.data.msg });
    }
};

export const removeItemFromCart = (itemId) => async (dispatch) => {
    try {
        await axios.delete(`/api/cart/${itemId}`);
        dispatch({ type: 'REMOVE_ITEM_SUCCESS', payload: itemId });
    } catch (err) {
        dispatch({ type: 'REMOVE_ITEM_FAIL', payload: err.response.data.msg });
    }
};
