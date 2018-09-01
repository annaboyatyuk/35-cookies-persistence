import superagent from 'superagent';


let initialState = false;
// Actions
const TRUEFALSE = 'TRUEFALSE'


// Reducer
export default (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
      case TRUEFALSE:
        return payload
    default: return state;
  }
}


export const trueFalse = (boolean) => ({
  type: TRUEFALSE,
  payload: boolean
})

export const signupUser = (newUser) => {
  return dispatch => {
    superagent
      .post(`${process.env.REACT_APP_API_URL}/signup`)
      .send(newUser)
      .then(res => {
        localStorage.token = JSON.stringify(res.text)
        dispatch(trueFalse(true))
      })
  }
}



export const loginUser = (user) => {

  return dispatch => {
    superagent
      .get(`${process.env.REACT_APP_API_URL}/login`)
        .auth(user.username, user.password)
        .then(res => {
          localStorage.token = JSON.stringify(res.text);
          dispatch(trueFalse(true));
        })
  };
}

