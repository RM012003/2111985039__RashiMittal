const initialState = {
    items: [],
    loading: true,
    error: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_CART_SUCCESS':
            return {
                ...state,
                items: payload.items,
                loading: false,
            };
        case 'ADD_ITEM_SUCCESS':
            return {
                ...state,
                items: payload.items,
                loading: false,
            };
        case 'REMOVE_ITEM_SUCCESS':
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload),
                loading: false,
            };
        case 'GET_CART_FAIL':
        case 'ADD_ITEM_FAIL':
        case 'REMOVE_ITEM_FAIL':
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
