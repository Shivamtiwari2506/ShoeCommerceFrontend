import api from '../../services/axiosInstance';
import {decryptData } from '../../common/commonFunction';

export const fetchUserData = (_id) => async(dispatch) => {
   try {
      dispatch({ type: "REQUEST_USER_DATA" });

      await api.get(`/users/${_id}`)
      .then((response) => {
        if(response?.data && response?.data?.success === true) {
         const decryptedData = decryptData(response?.data?.data);
         dispatch({
            type: "SET_USER_DATA",
            payload: decryptedData,
         })
        }
      })
      .catch((error) => {
         dispatch({
            type: "ERROR_FETCHING",
            payload: error.response?.data?.error || error?.message || 'Something went wrong',
         })
      })
   } catch (error) {
      console.log("error", error);
   }
};

export const logoutUser = () => (dispatch) => {
   dispatch({ type: "LOGOUT_USER" });
 };
 