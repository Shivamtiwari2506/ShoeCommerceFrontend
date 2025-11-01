import api from "../../services/axiosInstance";

export const fetchCartItems = (userId) => async (dispatch) => {
   try {
     dispatch({ type: "REQUEST_CART_ITEMS" });
 
      await api.get(`/cart`, { params: { userId } })
      .then((response) => {
         if(response?.data && response?.data?.success === true) {
            dispatch({
               type: "SET_CART_ITEMS",
               payload: response?.data?.cart,
            })
         }
      })
      .catch((error) => {
         dispatch({
           type: "FAIL_CART_ITEMS",
           payload: error?.response?.data?.message || error?.message,
         });
      });
   } catch (error) {
     dispatch({
       type: "FAIL_CART_ITEMS",
       payload: error.response?.data?.message || error.message,
     });
   }
 };
 

