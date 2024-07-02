import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/products');
        dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'GET_PRODUCTS_FAIL', payload: err.response.data.msg });
    }
};

export const getProductById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/products/${id}`);
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'GET_PRODUCT_FAIL', payload: err.response.data.msg });
    }
};
