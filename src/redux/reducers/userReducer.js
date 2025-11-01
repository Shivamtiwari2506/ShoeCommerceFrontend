const initialState = {
   user: null,
   loading: false,
   error: null,
 };
 
const userReducer = (state = initialState, action) => {
   switch (action.type) {
     case "REQUEST_USER_DATA":
       return { ...state, loading: true, error: null };
 
     case "SET_USER_DATA":
       return { ...state, loading: false, user: action.payload };
 
     case "ERROR_FETCHING":
       return { ...state, loading: false, error: action.payload, user: {} };

     case "LOGOUT_USER": 
     return {...state, user: null};
 
     default:
       return state;
   }
 };
 export default userReducer;