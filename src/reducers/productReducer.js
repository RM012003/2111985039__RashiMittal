const initialState = {
    items: [],
    item: null,
    loading: true,
    error: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                items: payload,
                loading: false,
            };
        case 'GET_PRODUCT_SUCCESS':
            return {
                ...state,
                item: payload,
                loading: false,
            };
        case 'GET_PRODUCTS_FAIL':
        case 'GET_PRODUCT_FAIL':
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
