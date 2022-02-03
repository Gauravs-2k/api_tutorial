export const GET_DETAILS = 'GET_DETAILS';
import { getUserDetails } from '../config/apiUrl';

export const getDetails = () => {
  try {
    return async dispatch => {
      const response = await getUserDetails();
      if (response.data) {
        // console.log(JSON.stringify(response.data));
        dispatch({
          type: GET_DETAILS,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};