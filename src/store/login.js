import superagent from 'superagent';

let initialState = false;
// Actions
const LOGIN = 'LOGIN';


// Reducer
export default (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return [
        payload
      ];
    default: return state;
  }
}

// Action Creators
// export const login = (thing) => { 
// }

export const signup = (newUser) => {

  return dispatch => {
    superagent
      .post(`${process.env.API_URL}/signup`)
      .send(newUser)
      .then(res => {
        localStorage.token = JSON.stringify(res.text)
        dispatch(login())
      })
  }
}



export const login = (user) => {

  return dispatch => {
    superagent
      .get(`${process.env.API_URL}/login`)
        .auth(user.username, user.password)
        .then(res => {
          localStorage.token = JSON.stringify(res.text);
          dispatch(login());
        })
  };
}

