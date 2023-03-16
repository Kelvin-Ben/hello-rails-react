const initialState = {
  greeting: '',
  loading: false,
  error: false
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING_REQUEST':
      return {
        ...state,
        loading: true,
        error: false
      };
    case 'FETCH_GREETING_SUCCESS':
      return {
        ...state,
        greeting: action.payload,
        loading: false,
        error: false
      };
    case 'FETCH_GREETING_FAILURE':
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default greetingReducer;