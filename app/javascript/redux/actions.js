import axios from 'axios';

export const fetchGreeting = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GREETING_REQUEST' });

    axios.get('/random_greeting')
      .then(response => {
        dispatch({
          type: 'FETCH_GREETING_SUCCESS',
          payload: response.data.content
        });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_GREETING_FAILURE' });
      });
  };
};