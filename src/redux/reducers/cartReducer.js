const initialState = {
   cart: {},
   loading: false,
   error: null,
}

const cartReducer = (state = initialState, action) => {
   switch (action?.type) {
      case "REQUEST_CART_ITEMS": 
         return {
            ...state,
            loading: true,
         };
      case "SET_CART_ITEMS": return {
         ...state,
         loading: false,
         cart: action?.payload
      };
      case "FAIL_CART_ITEMS": return {
         ...state,
         loading: false,
         error: action?.payload,
         cart: {},
      };
      default: return state;
   }
}

export default cartReducer;