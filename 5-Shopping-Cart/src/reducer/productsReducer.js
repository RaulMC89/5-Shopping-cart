export const productsReducer = ( state = [], action) => {
    switch (action.type) {
        case 'AddProductCart':
            
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];
        case 'UpdateUpQuantityProductCart':
            
            return state.map(prod => {
                if (prod.product.id === action.payload.id) {
                    return { ...prod, quantity: prod.quantity + 1 };
                }
                return prod;
            });
        case 'UpdateDownQuantityProductCart':
            
            return state.map(prod => {
                if (prod.product.id === action.payload) {
                    return { ...prod, quantity: prod.quantity - 1 };
                }
                return prod;
            });
        case 'DeletedProductCart':
            
            return [
                ...state.filter(prod => prod.product.id !== action.payload)
            ];
    
        default:
            break;
    }
}