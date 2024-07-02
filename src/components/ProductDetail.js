import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productActions';

const ProductDetail = ({ match }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.item);

    useEffect(() => {
        dispatch(getProductById(match.params.id));
    }, [dispatch, match.params.id]);

    return (
        <div>
            {product && (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <img src={product.imageUrl} alt={product.name} />
                </>
            )}
        </div>
    );
};

export default ProductDetail;
