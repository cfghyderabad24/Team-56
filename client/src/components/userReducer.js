// userReducer.js
const initialState = {
    loggedIn: false,
    role: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          loggedIn: true,
          role: action.payload.role,
        };
      case 'LOGOUT_USER':
        return initialState;
      default:
        return state;
    }
  };
  
  export default userReducer;
  