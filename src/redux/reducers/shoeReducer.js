const initialState = {
  shoes: [],
  loading: false,
  error: null,
};

const shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_SHOE_LIST":
      return { ...state, loading: true };
    case "SET_SHOE_LIST":
      return { ...state, loading: false, shoes: action.payload };
    case "ERROR_SHOE_LIST":
      return { ...state, loading: false, error: action.payload, shoes: [] };
    default:
      return state;
  }
};

export default shoeReducer;
