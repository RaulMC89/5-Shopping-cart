import { ADD_PRODUCT_CART, DELETE_PRODUCT_CART, UPDATE_DOWN_QUANTITY_PRODUCT_CART, UPDATE_UP_QUANTITY_PRODUCT_CART } from "./useProductsCart";

export const productsReducer = ( state = [], action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
        case UPDATE_UP_QUANTITY_PRODUCT_CART:
            
            return state.map(prod => {
                if (prod.product.id === action.payload.id) {
                    return { ...prod, quantity: prod.quantity + 1 };
                }
                return prod;
            });
        case UPDATE_DOWN_QUANTITY_PRODUCT_CART:
            
            return state.map(prod => {
                if (prod.product.id === action.payload) {
                    return { ...prod, quantity: prod.quantity - 1 };
                }
                return prod;
            });
        case DELETE_PRODUCT_CART:
            
            return [
                ...state.filter(prod => prod.product.id !== action.payload)
            ];
    
        default:
            break;
    }
}