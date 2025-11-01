import api from "../../services/axiosInstance";

export const fetchShoeList = () => async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_SHOE_LIST" });

    await api
      .get("/products")
      .then((response) => {
        if (response?.data && response?.data?.success === true) {
          dispatch({
            type: "SET_SHOE_LIST",
            payload: response.data?.data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: "ERROR_SHOE_LIST",
          payload:
            error.response?.data?.message ||
            error.message ||
            "Something went wrong",
        });
      });
  } catch (error) {
    dispatch({
      type: "ERROR_SHOE_LIST",
      payload:
        error.response?.data?.message ||
        error.message ||
        "Something went wrong",
    });
  }
};
